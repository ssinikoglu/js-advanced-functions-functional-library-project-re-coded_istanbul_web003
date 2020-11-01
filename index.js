const fi = (function () {
  return {
    libraryMethod: function () {
      return "Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0";
    },

    each: function (collection, alert) {
      for (let i in collection) {
        alert(collection[i]);
      }
      return collection;
    },

    map: function (collection, callback) {
      const newCollection = [];
      for (let i in collection) {
        newCollection.push(callback(collection[i]));
      }
      return newCollection;
    },

    reduce: function (collection, callback, acc) {
      for (let i = 0; i < collection.length; i++) {
        if (!acc) {
          acc = collection[0];
          i++;
        }
        acc = callback(acc, collection[i]);
      }
      return acc;
    },

    find: function (collection, predicate) {
      for (let i in collection) {
        if (predicate(collection[i]) === true) {
          return collection[i];
        }
      }
    },

    filter: function (collection, predicate) {
      const newCollection = [];
      for (let i in collection) {
        if (predicate(collection[i]) === true) {
          newCollection.push(collection[i]);
        }
      }
      return newCollection;
    },

    size: function (collection) {
      return Array.isArray(collection)
        ? collection.length
        : Object.keys(collection).length;
    },

    first: function (collection, n) {
      if (!n) {
        return collection[0];
      } else {
        return collection.slice(0, n);
      }
    },

    last: function (collection, n) {
      if (!n) {
        return collection[collection.length - 1];
      } else {
        return collection.slice(collection.length - n);
      }
    },

    compact: function (collection) {
      let noFalsy = collection.filter(Boolean);
      return noFalsy;
    },

    sortBy: function (collection, callback) {
      let newCollection = [...collection];
      return newCollection.sort(function (a, b) {
        return callback(a) - callback(b);
      });
    },

    flatten: function (array, shallow) {
      let newArray = [];

      if (!shallow) {
        array.forEach((el) => {
          if (Array.isArray(el)) {
            newArray.push(...this.flatten(el));
          } else {
            newArray.push(el);
          }
        });
      } else {
        for (let el of array) {
          let index = array.indexOf(el);

          if (Array.isArray(el)) {
            let arr = array.slice(index, index + 1)[0];
            for (let el of arr) {
              newArray.push(el);
            }
          } else {
            newArray.push(el);
          }
        }
      }
      return newArray;
    },

    uniq: function (array, isSorted, callback) {
      let newArray;
      if (callback) {
        let arr = [...array].map((el) => callback(el));
        newArray = array.filter(
          (value, index, array) => arr.indexOf(callback(value)) === index
        );
      } else {
        newArray = [...new Set(array)];
      }
      return newArray;
    },

    keys: function (object) {
      return Object.keys(object);
    },

    values: function (object) {
      return Object.values(object);
    },

    functions: function (object) {
      let functionsList = [];
      for (let key in object) {
        if (typeof object[key] === "function") {
          functionsList.push(key);
        }
      }
      return functionsList.sort();
    },
  };
})();

fi.libraryMethod();
