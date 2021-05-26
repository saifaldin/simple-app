pipeline {
    agent any
    stages {
        stage('echo') {
          steps {
            sh 'echo "hello"'
          }
        }
        stage('test') {
          steps {
            sh 'yarn test'
          }
        }
    }
}
