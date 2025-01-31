# Act Local GitHub Actions Runner

This directory contains configuration and documentation for running GitHub Actions locally using [act](https://github.com/nektos/act).

## Setup Instructions

1. Install act:

```bash
brew install act
```

2. Configure Docker context (required for all environments):

```bash
docker context create act-runner --docker host=unix:///var/run/docker.sock
docker context use act-runner
```

## Configuration Files

- `.actrc`: Contains act configuration (git-ignored)
- `.secrets/`: Directory for local secrets (git-ignored)

### Setting Up Secrets

Create a `.secrets` directory and add your secrets as files:

```bash
mkdir .act/.secrets
echo "your-secret-value" > .act/.secrets/SECRET_NAME
```

## Running Workflows

Basic usage:

```bash
act -W .github/workflows/workflow-name.yml
```

Test a specific event:

```bash
act push -W .github/workflows/workflow-name.yml
```

## Known Issues and Solutions

### M1/M2 Mac Setup

When running act on M1/M2 Macs, users often encounter Docker socket mounting issues with errors like:

```
Error: failed to start container: Error response from daemon: error while creating mount source path '/host_mnt/Users/naaiyy/.docker/run/docker.sock': mkdir /host_mnt/Users/naaiyy/.docker/run/docker.sock: operation not supported
```

#### Solution

The solution is to create and use a proper Docker context that points to the correct socket:

1. Create a new Docker context with the correct socket path:

```bash
docker context create m1 --docker host=unix:///Users/naaiyy/Library/Containers/com.docker.docker/Data/docker-cli.sock
```

2. Switch to the new context:

```bash
docker context use m1
```

After setting up the correct Docker context, act should work properly with simple commands like:

```bash
act -W .github/workflows/act-test.yml
```

#### Important Notes

- No need to specify socket paths in environment variables or command flags
- No need for complex .actrc configurations
- The solution fixes the root cause at the Docker context level
- Works with both dry-run and actual execution
