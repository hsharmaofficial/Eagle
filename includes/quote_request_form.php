<div class="bg-card border-border p-8 rounded-lg shadow-lg w-full sticky top-4">
    <form action="/process_quote.php" method="POST" class="space-y-4">
        <div class="text-center mb-6">
            <h2 class="text-2xl font-bold text-foreground">
                Request a Quote
            </h2>
            <p class="text-muted-foreground mt-2">
                Get a free consultation for your needs
            </p>
        </div>

        <?php if (isset($_GET['status']) && isset($_GET['message'])) : ?>
            <div class="p-4 rounded-md <?php echo $_GET['status'] === 'success' ? 'bg-green-50 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-50 text-red-800 dark:bg-red-900/30 dark:text-red-400'; ?> mb-4 flex items-center gap-2">
                <i data-lucide="<?php echo $_GET['status'] === 'success' ? 'check-circle' : 'alert-circle'; ?>" class="w-5 h-5"></i>
                <p><?php echo htmlspecialchars($_GET['message']); ?></p>
            </div>
        <?php endif; ?>

        <div class="space-y-2">
            <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
            <input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                required
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            />
        </div>

        <div class="space-y-2">
            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                required
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            />
        </div>

        <div class="space-y-2">
            <label for="phone" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Phone Number</label>
            <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(555) 123-4567"
                required
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            />
        </div>

        <div class="space-y-2">
            <label for="serviceType" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Service Type</label>
            <input
                id="serviceType"
                name="serviceType"
                type="text"
                placeholder="AC Maintenance / Industrial Washing Machine"
                required
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                value="<?php echo isset($_GET['service']) ? htmlspecialchars($_GET['service']) : ''; ?>"
            />
        </div>

        <div class="space-y-2">
            <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
            <textarea
                id="message"
                name="message"
                placeholder="Please describe your service needs..."
                required
                class="w-full px