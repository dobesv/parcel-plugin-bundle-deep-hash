const Bundle = require('parcel-bundler/src/Bundle');
const crypto = require('crypto');

module.exports = function (bundler) {
    Object.assign(Bundle.prototype, {
        getHash() {
            let hash = crypto.createHash('md5');
            let visited = new Set();
            let visit = asset => {
                if (!visited.has(asset.id)) {
                    visited.add(asset.id);
                    hash.update(asset.hash);
                    Array.from(asset.depAssets.values()).forEach(visit);
                }
            };
            this.assets.forEach(visit);
            let hashHex = hash.digest('hex');
            console.log('hash', this.name, hashHex);
            return hashHex;
        }
    });
};
