#!/bin/sh
#
# Execute commands after Heroku environment is fully deployed.
#
DEPLOY_ENV=staging
REFLECT_API_KEY=pf0TsJyh9m9NPhsjzgS2G8GGu649OjJk1i5s73Bv
if [[ -z "${DEPLOY_ENV}" ]]; then
    echo "Environment variable not set"
else
    if [ "${DEPLOY_ENV}" = "staging" ]; then
        Tag="login"
        echo "=== Triggering Reflect tests ==="
        echo "Tag=${Tag}"
        echo "Response:"
        curl --silent -X POST \
        -H "X-API-KEY: ${REFLECT_API_KEY}" \
        https://api.reflect.run/v1/tags/${Tag}/executions
    fi
fi
