const cdk = require('aws-cdk-lib');
const s3 = require('aws-cdk-lib/aws-s3');

class InsecureS3Stack extends cdk.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    new s3.Bucket(this, 'InsecureBucket', {
      bucketName: 'my-public-bucket-example',
      publicReadAccess: true,        // ❌ Vulnerability
      blockPublicAccess: s3.BlockPublicAccess.NONE, // ❌ Vulnerability
      removalPolicy: cdk.RemovalPolicy.DESTROY
    });
  }
}

module.exports = { InsecureS3Stack };
