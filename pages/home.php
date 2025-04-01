<?php
// Home page content
?>

<!-- Hero Section -->
<section class="relative bg-white dark:bg-gray-900 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-r from-blue-100 to-pink-100 dark:from-blue-900/20 dark:to-pink-900/20 z-0"></div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-28">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                    <span class="block">Reliable. Efficient.</span>
                    <span class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600">Expert Solutions.</span>
                </h1>
                <p class="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
                    Delhi/NCR's trusted partner for commercial AC and industrial washing machine services with over 20 years of experience.
                </p>
                <div class="mt-10 flex flex-col sm:flex-row gap-4">
                    <a href="/contact" class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-600 to-pink-600 hover:from-blue-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        Request a Quote
                    </a>
                    <a href="/services" class="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-md shadow-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        Explore Services
                    </a>
                </div>
            </div>
            <div class="relative">
                <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-pink-600 rounded-lg blur opacity-75"></div>
                <div class="relative bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-xl">
                    <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80" alt="AC Maintenance" class="w-full h-full object-cover">
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Trust Indicators -->
<?php include_once($base_path . '/includes/sections/trust_indicators.php'); ?>

<!-- Our Clients -->
<?php include_once($base_path . '/includes/sections/our_clients.php'); ?>

<!-- About Us -->
<div class="relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-[#2563eb]/10 to-transparent transform -skew-y-6 scale-110"></div>
    <?php include_once($base_path . '/includes/sections/about_us.php'); ?>
</div>

<!-- Enhanced Services -->
<div class="relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-bl from-[#ec4899]/10 to-transparent transform skew-y-6 scale-110"></div>
    <?php include_once($base_path . '/includes/sections/enhanced_services.php'); ?>
</div>

<!-- Why Choose Us -->
<div class="relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-tr from-[#2563eb]/10 to-[#ec4899]/5 transform -skew-y-3 scale-110"></div>
    <?php include_once($base_path . '/includes/sections/why_choose_us.php'); ?>
</div>

<!-- Testimonials -->
<div class="relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-tr from-[#2563eb]/10 to-[#ec4899]/5 transform -skew-y-3 scale-110"></div>
    <?php include_once($base_path . '/includes/sections/testimonials.php'); ?>
</div>

<!-- Contact -->
<div class="relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-tl from-[#ec4899]/10 to-[#2563eb]/5 transform skew-y-3 scale-110"></div>
    <?php include_once($base_path . '/includes/sections/contact.php'); ?>
</div>