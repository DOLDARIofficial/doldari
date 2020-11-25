"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aws_sdk_1 = require("aws-sdk");
const region = 'us-east-2c';
aws_sdk_1.default.config.update({
    region: 'us-east-2c',
    accessKeyId: 'AKIATILWY45OWWGZVUEH',
    secretAccessKey: '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',
});
const client = new aws_sdk_1.default.SecretsManager({ region });
async function getDb() {
    let secret;
    try {
        const list = await client.listSecrets().promise();
        const target = list.SecretList.find((x) => x.Name.includes(process.env.NODE_ENV === 'production'
            ? 'DoldariProductionDB' : 'DoldariDB'));
        const dbSecretData = await client
            .getSecretValue({ SecretId: target.Name })
            .promise();
        if ('data.SecretBinary' in dbSecretData) {
        }
        else {
            secret = JSON.parse(dbSecretData.SecretString);
        }
    }
    catch (err) {
        console.error(err);
        if (err.code === 'DecryptionFailureException') {
            throw err;
        }
        else if (err.code === 'InternalServiceErrorException') {
            throw err;
        }
        else if (err.code === 'InvalidParameterException') {
            throw err;
        }
        else if (err.code === 'InvalidRequestException') {
            throw err;
        }
        else if (err.code === 'ResourceNotFoundException') {
            throw err;
        }
    }
    return secret;
}
exports.default = async () => {
    const dbSecrets = await getDb();
    return {
        database: Object.assign({}, dbSecrets),
    };
};
//# sourceMappingURL=loadConfig.js.map