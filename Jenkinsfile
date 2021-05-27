pipeline {
  agent any
  environment {
    VERSION = "${env.GIT_COMMIT[0..3]}"
    DOCKERHUB_IMAGE = 'saifaldin3388/app'
    DOCKERFILE = 'Dockerfile'
  }
  stages {
    stage('install packages & test') {
      agent { docker 'node:14-alpine' }
      steps {
        sh 'yarn'
        sh 'yarn test'
      }
    }
    stage('docker build & push image') {
      steps {
        sh "docker build -f ${DOCKERFILE} -t ${DOCKERHUB_IMAGE}:${VERSION} ."
      }
    }
  }
}
