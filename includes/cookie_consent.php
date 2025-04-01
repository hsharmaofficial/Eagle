<?php
// Check if cookie consent has been given
$cookie_consent = isset($_COOKIE['cookie_consent']) ? $_COOKIE['cookie_consent'] : false;
?>

<div id="cookie-consent" class="fixed bottom-0 inset-x-0 pb-2 sm:pb-5 z-50 <?php echo $cookie_consent ? 'hidden' : ''; ?>">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="p-2 rounded-lg bg-blue-600 shadow-lg sm:p-3">
            <div class="flex items-center justify-between flex-wrap">
                <div class="w-0 flex-1 flex items-center">
                    <span class="flex p-2 rounded-lg bg-blue-800">
                        <i data-lucide="cookie" class="h-6 w-6 text-white"></i>
                    </span>
                    <p class="ml-3 font-medium text-white truncate">
                        <span class="md:hidden">We use cookies for a better experience.</span>
                        <span class="hidden md:inline">We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic.</span>
                    </p>
                </div>
                <div class="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                    <a href="/privacy-policy" class="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-600 bg-white hover:bg-blue-50">
                        Learn more
                    </a>
                </div>
                <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
                    <button id="accept-cookies" type="button" class="-mr-1 flex p-2 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-white">
                        <span class="sr-only">Accept</span>
                        <i data-lucide="check" class="h-6 w-6 text-white"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        const cookieConsent = document.getElementById('cookie-consent');
        const acceptCookiesButton = document.getElementById('accept-cookies');
        
        if (acceptCookiesButton) {
            acceptCookiesButton.addEventListener('click', function() {
                // Set cookie for 1 year
                const date = new Date();
                date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
                document.cookie = "cookie_consent=true; expires=" + date.toUTCString() + "; path=/";
                
                // Hide the cookie consent banner
                cookieConsent.classList.add('hidden');
            });
        }
    });
</script>