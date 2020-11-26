FROM php:7.4-fpm

# Arguments defined in docker-compose.yml
ARG user
ARG uid

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install PHP extensions
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# Get latest Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Create system user to run Composer and Artisan Commands
RUN useradd -G www-data,root -u 1000 -d /home/mohan mohan
RUN mkdir -p /home/mohan/.composer && \
    chown -R $user:mohan /home/mohan

RUN mkdir /var/www/myapp
# Set working directory
WORKDIR /var/www/myapp

USER $user

COPY package*.json ./ yarn.lock ./

COPY .env.example .env

COPY . .

RUN  mkdir -p storage/framework/sessions 
  
RUN mkdir -p storage/framework/views 
RUN mkdir -p storage/framework/cache && chown -R www-data:www-data /var/www/myapp &&  /usr/bin/composer install 

EXPOSE 8080

CMD /usr/local/bin/php artisan key:generate && /usr/local/bin/php artisan config:cache && /usr/local/bin/php artisan passport:install --force && /usr/local/bin/php artisan passport:keys --force && php-fpm

