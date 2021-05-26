pipeline {
    agent {
      docker {
        image 'node:14.17-alpine'
      }
    }
    stages {
        stage('echo') {
          steps {
            sh 'echo "hello"'
          }
        }
        stage('build') {
          steps {
            sh 'yarn'
          }
        }
        stage('test') {
          steps {
            sh 'yarn test'
          }
        }
    }
}
