pipeline {
    agent any

    triggers {
        pollSCM('*/5 * * * *') // Mengecek perubahan di repositori setiap 5 menit
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout your Next.js source code from version control
                git branch: 'main', url: 'https://github.com/andrefahrezii/filter.git'
            }
        }

        stage('Build') {
            steps {
                script {
                    // Build Next.js app with Docker Compose
                    echo 'docker-compose build'
                    sh 'docker ps -a'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Deploy dengan Docker Compose
                    sh 'docker compose up -d --build --remove-orphans'
                }
            }
        }

        stage('SonarQube Analysis') {
            steps {
                // Menjalankan SonarQube analysis
                withSonarQubeEnv('SonarQube_Server') {
                    sh 'sonar-scanner \
                        -Dsonar.projectKey=filter-fe \
                        -Dsonar.sources=. \
                        -Dsonar.host.url=https://sonarqube.wosiangmalam.site \
                        -Dsonar.login=sqp_5d4e7e5e43c7705ef5b12112dc0801aebb49a54c'
                }
            }
        }
    }

    post {
        success {
            // Menampilkan pesan jika berhasil
            echo 'Build dan deploy berhasil'
        }
        failure {
            // Menampilkan pesan jika gagal
            echo 'Build atau deploy gagal'
        }
    }
}
