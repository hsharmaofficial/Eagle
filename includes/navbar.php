<nav class="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
            <div class="flex items-center">
                <a href="/" class="flex-shrink-0 flex items-center">
                    <img src="/public/logo.svg" alt="Eagle Eye Enterprise" class="h-8 w-auto">
                    <span class="ml-2 text-xl font-bold text-gray-900 dark:text-white">Eagle Eye Enterprise</span>
                </a>
            </div>
            
            <!-- Mobile menu button -->
            <div class="flex items-center lg:hidden">
                <button id="mobile-menu-button" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                    <span class="sr-only">Open main menu</span>
                    <i data-lucide="menu" class="block h-6 w-6"></i>
                </button>
            </div>
            
            <!-- Desktop menu -->
            <div class="hidden lg:flex lg:items-center lg:space-x-4">
                <a href="/" class="px-3 py-2 text-sm font-medium text-gray-900 hover:text-blue-600 rounded-md <?php echo ($page === 'home') ? 'text-blue-600' : ''; ?>">Home</a>
                <a href="/about" class="px-3 py-2 text-sm font-medium text-gray-900 hover:text-blue-600 rounded-md <?php echo ($page === 'about') ? 'text-blue-600' : ''; ?>">About</a>
                <a href="/services" class="px-3 py-2 text-sm font-medium text-gray-900 hover:text-blue-600 rounded-md <?php echo ($page === 'services') ? 'text-blue-600' : ''; ?>">Services</a>
                <a href="/spare-parts" class="px-3 py-2 text-sm font-medium text-gray-900 hover:text-blue-600 rounded-md <?php echo ($page === 'spare-parts') ? 'text-blue-600' : ''; ?>">Spare Parts</a>
                <a href="/contact" class="px-3 py-2 text-sm font-medium text-gray-900 hover:text-blue-600 rounded-md <?php echo ($page === 'contact') ? 'text-blue-600' : ''; ?>">Contact</a>
                <a href="/contact" class="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-600 to-pink-600 hover:from-blue-700 hover:to-pink-700">Get a Quote</a>
            </div>
        </div>
    </div>
    
    <!-- Mobile menu, show/hide based on menu state -->
    <div id="mobile-menu" class="lg:hidden hidden">
        <div class="px-2 pt-2 pb-3 space-y-1">
            <a href="/" class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50 <?php echo ($page === 'home') ? 'text-blue-600 bg-gray-50' : ''; ?>">Home</a>
            <a href="/about" class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50 <?php echo ($page === 'about') ? 'text-blue-600 bg-gray-50' : ''; ?>">About</a>
            <a href="/services" class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50 <?php echo ($page === 'services') ? 'text-blue-600 bg-gray-50' : ''; ?>">Services</a>
            <a href="/spare-parts" class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50 <?php echo ($page === 'spare-parts') ? 'text-blue-600 bg-gray-50' : ''; ?>">Spare Parts</a>
            <a href="/contact" class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50 <?php echo ($page === 'contact') ? 'text-blue-600 bg-gray-50' : ''; ?>">Contact</a>
            <a href="/contact" class="block w-full text-center mt-3 px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-600 to-pink-600 hover:from-blue-700 hover:to-pink-700">Get a Quote</a>
        </div>
    </div>
</nav>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    });
</script>