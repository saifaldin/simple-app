pipeline {
    agent any
    stages {
        stage('node') {
          agent { docker { image 'node:14-alpine' } }
          steps {
            sh 'node --version'
          }
        }
    // stage('build') {
    //   steps {
    //     sh 'npm'
    //   }
    // }
    // stage('test') {
    //   steps {
    //     sh 'npm run test'
    //   }
    // }
    }
}
