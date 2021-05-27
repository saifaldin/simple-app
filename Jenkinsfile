pipeline {
  agent { docker { image 'node:14-alpine' } }
  environment {
    VERSION = "${GIT_COMMIT[0..3]}"
    DOCKERHUB_IMAGE = 'saifaldin3388/app'
    DOCKERFILE = 'Dockerfile'
  }
  stages {
    stage('install yarn') {
      steps {
        sh 'npm install -g yarn'
      }
    }
    stage('install packages & test') {
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
