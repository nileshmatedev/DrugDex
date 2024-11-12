import Fuse from 'fuse.js';

const data = [your_data.json];

const options = {
  keys: ["Medicine Name", "age"] // Fields to search in
};

const fuse = new Fuse(data, options);

const results = fuse.search("jo");

console.log(results);