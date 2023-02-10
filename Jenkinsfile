@Library('jenkins-SL') 
def gv
pipeline {
    agent { docker 'node:14' }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build Docker Image & Push to Docker Hub') {
            steps {
                buildImgCr()
            }
        }
    }
}
