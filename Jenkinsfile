pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building application...'
                    sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
                    sh 'npm test'
            }
        }
        stage('Deploy'){
            steps {
                echo 'building docker image..'
                sh 'docker build -t youssefjeh/Crud-Application-React-MaterialUI:v6.0 .'
                echo 'pushing to  DockerHuB ...'
                withCredentials([usernamePassword(credentialsId:'dockerhub-rep', passwordVariable: 'PASS', usernameVariable: 'USER')]) {
                    sh 'docker tag youssefjeh/Crud-Application-React-MaterialUI:v6.0 dockerysfCrud-Application-React-MaterialUI:v6.0'
                    sh "echo $PASS | docker login -u $USER --password-stdi
                    sh 'docker push dockerysf/Crud-Application-React-MaterialUI:v6.0'
                }
                  
            }
        }
    }
}
