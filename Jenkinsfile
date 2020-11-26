node() {

    stage('Cloning Git') {
        checkout scm
    }

    stage('Frontend Install & Build dependencies') {   
    
        sh '''
            cd /var/lib/jenkins/workspace/ezyattend-dev/front/
            npm install
            rm -rf /var/lib/jenkins/workspace/ezyattend-dev/front/build/
            cd /var/lib/jenkins/workspace/ezyattend-dev/front/
            npm run build
            ''' 
        echo "Modules installed"
    }

    stage('Frontend Configrations') {
        sh '''
            #!/bin/bash
            cp /var/lib/jenkins/workspace/ezyattend-dev/front/.htaccess  /var/lib/jenkins/workspace/ezyattend-dev/front/build/.htaccess
            '''  
        echo "Modules Build"
    }

    stage('Install backend dependencies') {
        sh '''
            rm -rf /var/lib/jenkins/workspace/ezyattend-dev/backend/vendor/
            cd /var/lib/jenkins/workspace/ezyattend-dev/backend/
            composer install
            '''          
        echo "Backend Composer Installed"        
    }

    stage('Backend Configrations') {
        sh '''
            cp /var/lib/jenkins/workspace/ezyattend-dev/backend/.env.example /var/lib/jenkins/workspace/ezyattend-dev/backend/.env
            cd /var/lib/jenkins/workspace/ezyattend-dev/backend/
            php artisan key:generate
            php artisan passport:install --force
            php artisan passport:keys --force
            '''
        echo "Backend Configuratoins has done" 
    }
}