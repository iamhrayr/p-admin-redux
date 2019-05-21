'use strict';

function isUndefined(value: any) {
  return value === undefined;
}

function isNull(value: any) {
  return value === null;
}

function isObject(value: any) {
  return value === Object(value);
}

function isArray(value: any) {
  return Array.isArray(value);
}

function isDate(value: any) {
  return value instanceof Date;
}

function isBlob(value: any) {
  return value && typeof value.size === 'number' && typeof value.type === 'string' && typeof value.slice === 'function';
}

function isFile(value: any) {
  return (
    isBlob(value) &&
    (typeof value.lastModifiedDate === 'object' || typeof value.lastModified === 'number') &&
    typeof value.name === 'string'
  );
}

function isFormData(value: any) {
  return value instanceof FormData;
}

function objectToFormData(obj: any, cfg: any, fd: FormData, pre: any) {
  if (isFormData(cfg)) {
    pre = fd;
    fd = cfg;
    cfg = null;
  }

  cfg = cfg || {};
  cfg.indices = isUndefined(cfg.indices) ? false : cfg.indices;
  cfg.nulls = isUndefined(cfg.nulls) ? true : cfg.nulls;
  fd = fd || new FormData();

  if (isUndefined(obj)) {
    return fd;
  } else if (isNull(obj)) {
    if (cfg.nulls) {
      fd.append(pre, '');
    }
  } else if (isArray(obj)) {
    if (obj.length) {
      obj.forEach(function(value: any, index: number) {
        // ATTENTION: this part is specific only for my api
        // Multer does not accept indexed array files like image[1], image[2]
        if (value instanceof File || value instanceof Blob) {
          var key: any = pre;
        } else {
          var key: any = pre + '[' + index + ']';
        }
        objectToFormData(value, cfg, fd, key);
      });
    }
  } else if (isDate(obj)) {
    fd.append(pre, obj.toISOString());
  } else if (isObject(obj) && !isFile(obj) && !isBlob(obj)) {
    Object.keys(obj).forEach(function(prop) {
      var value = obj[prop];

      if (isArray(value)) {
        while (prop.length > 2 && prop.lastIndexOf('[]') === prop.length - 2) {
          prop = prop.substring(0, prop.length - 2);
        }
      }

      var key = pre ? pre + '[' + prop + ']' : prop;

      objectToFormData(value, cfg, fd, key);
    });
  } else {
    fd.append(pre, obj);
  }

  return fd;
}

module.exports = objectToFormData;
