#!/bin/sh
#
# Execute commands after Heroku environment is fully deployed.
#
DEPLOY_ENV=staging
REFLECT_API_KEY=pf0TsJyh9m9NPhsjzgS2G8GGu649OjJk1i5s73Bv
LAST_COMMIT=`git rev-parse HEAD`
if [[ -z "${DEPLOY_ENV}" ]]; then
    echo "Environment variable not set"
else
    if [ "${DEPLOY_ENV}" = "staging" ]; then
        Tag="login"
        echo "=== Triggering Reflect tests ==="
        echo "Tag=${Tag}"
        echo "Commit=${LAST_COMMIT}"
        echo "Response:"
        curl --silent -X POST \
        -H "X-API-KEY: ${REFLECT_API_KEY}" \
        -H "Content-Type: application/json" \
        -d '{  "gitHub": { "owner": "gerson4g", "repo": "tributi-task","sha": "'$LAST_COMMIT'"}}' \
        https://api.reflect.run/v1/tags/${Tag}/executions
    fi
fi
