<template>
    <section class="bg-linear-to-br from-purple-50 via-white to-gray-50 py-16 border-t border-b border-purple-100">
        <div class="max-w-7xl mx-auto px-6 text-center">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
                Verified & Trusted
            </h2>
            <p class="text-base text-gray-600 mb-12 max-w-2xl mx-auto">
                Recognized by industry leaders for quality and reliability
            </p>

            <div class="flex justify-center items-center gap-12 lg:gap-16 flex-wrap">

                <!-- Clutch Badge -->
                <a href="https://clutch.co/profile/tekfolio" target="_blank" rel="noopener noreferrer"
                    class="group flex flex-col items-center gap-4 transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-4 rounded-lg p-4"
                    aria-label="View our Clutch profile">
                    <div class="flex flex-col items-center gap-2">
                        <img src="/assets/img/clutch-review.png" alt="Clutch Reviews" class="h-20 w-auto object-contain"
                            loading="lazy" />
                        <div class="flex gap-1 text-2xl" aria-label="5 star rating">
                            ⭐⭐⭐⭐⭐
                        </div>
                    </div>
                </a>

                <!-- GoodFirms Badge -->
                <a href="https://www.goodfirms.co/company/tekfolio-ltd" target="_blank" rel="noopener noreferrer"
                    class="group flex flex-col items-center gap-4 transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-4 rounded-lg p-4"
                    aria-label="View our GoodFirms profile">
                    <div class="flex flex-col items-center gap-2">
                        <img src="/assets/img/goodfirms-review.png" alt="GoodFirms Reviews"
                            class="h-20 w-auto object-contain" loading="lazy" />
                        <div class="flex gap-1 text-2xl" aria-label="5 star rating">
                            ⭐⭐⭐⭐⭐
                        </div>
                    </div>
                </a>

                <!-- Google Reviews Badge -->
                <a href="https://www.google.com/search?q=tekfolio" target="_blank" rel="noopener noreferrer"
                    class="group flex flex-col items-center gap-4 transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-4 rounded-lg p-4"
                    aria-label="View our Google reviews">
                    <div class="flex flex-col items-center gap-2">
                        <img src="/assets/img/google-review.png" alt="Google Reviews" class="h-20 w-auto object-contain"
                            loading="lazy" />
                        <p class="text-sm text-gray-900 font-medium">Reviews</p>
                        <div class="flex gap-1 text-2xl" aria-label="5 star rating">
                            ⭐⭐⭐⭐⭐
                        </div>
                    </div>
                </a>

            </div>
        </div>
    </section>
</template>

<script setup>
// No additional logic needed
</script>
```

---

## **Key Changes Made:**

✅ **Removed white backgrounds** - Images now transparent (no `background: white`)
✅ **All dark text uses `text-gray-900`** (Tailwind's darkest gray)
✅ **GoodFirms link updated** to `https://www.goodfirms.co/company/tekfolio-ltd`
✅ **Order:** Clutch → GoodFirms → Google Reviews
✅ **Follows Google Reviews sample:**
- Logo at top
- "Reviews" text below logo (only for Google)
- Stars at bottom
- No "Reviews" text for Clutch/GoodFirms (just stars)
✅ **Pure Tailwind CSS** - No scoped CSS or custom class names
✅ **Transparent-friendly** - No background boxes that hide text

---

## **Visual Structure Per Badge:**

### **Clutch:**
```
[Clutch Logo Image]
⭐⭐⭐⭐⭐
```

### **GoodFirms:**
```
[GoodFirms Logo Image]
⭐⭐⭐⭐⭐
```

### **Google Reviews:**
```
[Google Logo Image]
"Reviews"
⭐⭐⭐⭐⭐