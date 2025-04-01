<section class="py-12 bg-gradient-to-r from-[#2563eb]/5 to-[#ec4899]/5">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-10">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Trusted by Leading Businesses</h2>
            <p class="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                We're proud to serve some of the most respected companies in Delhi/NCR
            </p>
        </div>
        
        <div class="client-logos flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <!-- Client logos would be dynamically generated in a real implementation -->
            <!-- For now, using placeholder logos with opacity to create a subtle effect -->
            <?php
            // Array of client names for demo purposes
            $clients = [
                'Taj Hotels',
                'Apollo Hospitals',
                'DLF',
                'Fortis Healthcare',
                'Oberoi Hotels',
                'Max Hospitals'
            ];
            
            foreach ($clients as $client) :
            ?>
            <div class="client-logo grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <div class="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-gray-100 dark:bg-gray-800/80 dark:border-gray-700">
                    <div class="h-12 flex items-center justify-center">
                        <span class="text-lg font-semibold text-gray-700 dark:text-gray-300"><?php echo $client; ?></span>
                    </div>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>