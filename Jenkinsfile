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
            sh 'npm'
          }
        }
        stage('test') {
          steps {
            sh 'npm run test'
          }
        }
    }
}
