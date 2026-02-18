composer install
npm install

cp .env.example .env
php artisan key:generate

php artisan migrate

// for server
php artisan serve

// for React
npm run dev
