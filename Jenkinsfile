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
                echo 'building docker image..'
                sh 'docker build -t youssefjeh/Crud-Application-React-MaterialUI:v6.0 .'
            }
        }
        stage('Push to DockerHuB'){
            steps {
                
                echo 'pushing to  DockerHuB ...'
                withCredentials([usernamePassword(credentialsId:'dockerhub-rep', passwordVariable: 'PASS', usernameVariable: 'USER')]) {
                    sh 'docker tag youssefjeh/Crud-Application-React-MaterialUI:v6.0 dockerysfCrud-Application-React-MaterialUI:v6.0'
                    sh "echo $PASS | docker login -u $USER --password-stdin"
                    sh 'docker push dockerysf/Crud-Application-React-MaterialUI:v6.0'
    }
            }
        }
    }
}
