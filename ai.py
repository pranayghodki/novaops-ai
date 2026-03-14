import boto3
import json

bedrock = boto3.client(
    service_name="bedrock-runtime",
    region_name="us-east-1"
)

def ask_nova(prompt):

    body = json.dumps({
        "messages": [
            {
                "role": "user",
                "content": [
                    {
                        "text": f"""
You are a DevOps expert.

Analyze the following Kubernetes or DevOps error log and provide:

1. Issue
2. Possible causes
3. Fix steps
4. Useful kubectl or docker commands

Log:
{prompt}
"""
                    }
                ]
            }
        ]
    })

    response = bedrock.invoke_model(
        modelId="amazon.nova-micro-v1:0",
        body=body,
        contentType="application/json",
        accept="application/json"
    )

    response_body = json.loads(response["body"].read())

    result = response_body["output"]["message"]["content"][0]["text"]

    return result