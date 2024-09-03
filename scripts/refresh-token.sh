#!/bin/bash

# Set the API endpoint
API_ENDPOINT="https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=$ACCESS_TOKEN"

# Make a POST request to refresh the access token
response=$(curl -X GET "$API_ENDPOINT")
