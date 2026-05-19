pipeline {

    agent any

 

    environment {

        IMAGE_NAME = "jenkins-node-app"

        CONTAINER_NAME = "jenkins-container"

    }

 

    stages {

 

        stage('Clone Code') {

            steps {

                git branch: 'main',

                credentialsId: 'github-creds',

                url: 'https://github.com/anilkumargunturu88-art/.gitjenkins-pipeline.git'

            }

        }

 

        stage('Build Docker Image') {

            steps {

                sh 'docker build -t $IMAGE_NAME .'

            }

        }

 
stage('Remove Old Container')steps {sh 'docker rm -f $CONTAINER_NAME || true'}}stage('Deploy Container') {steps {sh '''docker run -d \--name $CONTAINER_NAME \-p 80:3000 \$IMAGE_NAME'''}}}post}success{echo 'Pipeline executed successfully'}failure{echo 'Pipeline failed'}}}
post{success { echo 'Pipeline executed successfully' }
 failure {
 echo 'Pipeline failed' }    }
}
