const yaml = require('js-yaml');
const fs = require('fs');

function ReadYamlConfig() {
    return yaml.safeLoad(fs.readFileSync('/etc/pkc-rpc-explorer/config.yaml', 'utf8'));
}

module.exports = {
    ReadYamlConfig: ReadYamlConfig,
};
