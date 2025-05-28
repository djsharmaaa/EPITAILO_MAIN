// 'use client';

// import {
//   MorphingDialog,
//   MorphingDialogTrigger,
//   MorphingDialogContent,
//   MorphingDialogTitle,
//   MorphingDialogImage,
//   MorphingDialogSubtitle,
//   MorphingDialogDescription,
//   MorphingDialogContainer,
// } from '../ui/morphing-dialog';

// import { motion } from 'framer-motion';

// const products = [
//   {
//     title: 'ET1 - Small Sized Floor Tile Adhesive',
//     image: '/images/ET1.png',
//     subtitle: 'TechTile Adhesive',
//     features: ['Ready to Use', 'High Bond Strength', 'Saves Time & Labour'],
//     water: '23%–25%',
//     potLife: '1.5 hrs @ 23°C',
//     coverage: '30–40 sq ft / 20kg @ 6mm',
//     color: {
//       base: 'sky',
//       text: 'text-sky-700',
//       border: 'border-sky-200',
//       bg: 'bg-sky-50',
//       badgeBg: 'bg-sky-500',
//       from: 'from-sky-50',
//       to: 'to-sky-100',
//     },
//   },
//   {
//     title: 'ET2 - Medium Tile Adhesive',
//     image: '/images/ET2.png',
//     subtitle: 'TechTile Adhesive',
//     features: ['Water Resistant', 'Easy Application', 'Strong Bonding'],
//     water: '22%–24%',
//     potLife: '2 hrs @ 23°C',
//     coverage: '25–35 sq ft / 20kg @ 6mm',
//     color: {
//       base: '#4ba25c',
//       text: 'text-[#4ba25c]',
//       border: 'border-[#4ba25c]',
//       bg: 'bg-[#e6f4ea]',
//       badgeBg: 'bg-[#4ba25c]',
//       from: 'from-[#e6f4ea]',
//       to: 'to-[#4ba25c]',
//     },
//   },
//   {
//     title: 'ET3 - Large Tile Adhesive',
//     image: '/images/ET3.png',
//     subtitle: 'TechTile Adhesive',
//     features: ['Water Resistant', 'Easy Application', 'Strong Bonding'],
//     water: '22%–24%',
//     potLife: '2 hrs @ 23°C',
//     coverage: '25–35 sq ft / 20kg @ 6mm',
//     color: {
//       base: 'orange',
//       text: 'text-orange-500',
//       border: 'border-orange-200',
//       bg: 'bg-orange-50',
//       badgeBg: 'bg-orange-500',
//       from: 'from-orange-50',
//       to: 'to-orange-100',
//     },
//   },
//   {
//     title: 'ET4 - Heavy Duty Adhesive',
//     image: '/images/ET4.png',
//     subtitle: 'TechTile Adhesive',
//     features: ['Water Resistant', 'Easy Application', 'Strong Bonding'],
//     water: '22%–24%',
//     potLife: '2 hrs @ 23°C',
//     coverage: '25–35 sq ft / 20kg @ 6mm',
//     color: {
//       base: '#7266a1',
//       text: 'text-[#7266a1]',
//       border: 'border-[#7266a1]',
//       bg: 'bg-[#f0eef9]',
//       badgeBg: 'bg-[#7266a1]',
//       from: 'from-[#f0eef9]',
//       to: 'to-[#7266a1]',
//     },
//   },
//   {
//     title: 'BJM - Tile Bond Mortar',
//     image: '/images/BJM.png',
//     subtitle: 'TechTile Adhesive',
//     features: ['Water Resistant', 'Easy Application', 'Strong Bonding'],
//     water: '22%–24%',
//     potLife: '2 hrs @ 23°C',
//     coverage: '25–35 sq ft / 20kg @ 6mm',
//     color: {
//       base: '#a0a0a0',
//       text: 'text-[#a0a0a0]',
//       border: 'border-[#a0a0a0]',
//       bg: 'bg-[#f5f5f5]',
//       badgeBg: 'bg-[#a0a0a0]',
//       from: 'from-[#f5f5f5]',
//       to: 'to-[#a0a0a0]',
//     },
//   },
//   {
//     title: 'Grout - Tile Joint Filler',
//     image: '/images/Grout.png',
//     subtitle: 'TechTile Adhesive',
//     features: ['Water Resistant', 'Easy Application', 'Strong Bonding'],
//     water: '22%–24%',
//     potLife: '2 hrs @ 23°C',
//     coverage: '25–35 sq ft / 20kg @ 6mm',
//     color: {
//       base: 'orange',
//       text: 'text-orange-500',
//       border: 'border-orange-200',
//       bg: 'bg-orange-50',
//       badgeBg: 'bg-orange-500',
//       from: 'from-orange-50',
//       to: 'to-orange-100',
//     },
//   },
// ];

// const cardVariantsLeft = {
//   hidden: { opacity: 0, x: -60 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
//   hover: { scale: 1.05, transition: { duration: 0.3 } },
// };

// const cardVariantsRight = {
//   hidden: { opacity: 0, x: 60 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
//   hover: { scale: 1.05, transition: { duration: 0.3 } },
// };

// const dialogVariants = {
//   hidden: { opacity: 0, scale: 0.95 },
//   visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
//   exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
// };

// const descriptionVariants = {
//   initial: { opacity: 0, scale: 0.95, y: 50 },
//   animate: { opacity: 1, scale: 1, y: 0 },
//   exit: { opacity: 0, scale: 0.95, y: 50 },
// };

// export default function ProductGrid() {
//   return (
//     <section className="py-16 px-6 md:px-20 mt-20">
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
//         {products.map((product, idx) => {
//           const isLeft = idx % 2 === 0;

//           return (
//             <motion.div
//               key={idx}
//               variants={isLeft ? cardVariantsLeft : cardVariantsRight}
//               initial="hidden"
//               whileInView="visible"
//               whileHover="hover"
//               viewport={{ once: false, amount: 0.3 }}
//               className="flex justify-center"
//             >
//               <MorphingDialog transition={{ type: 'spring', bounce: 0.05, duration: 0.25 }}>
//                 <MorphingDialogTrigger
//                   style={{ borderRadius: '16px' }}
//                   className="flex w-full max-w-[420px] h-[450px] flex-col overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 p-4"
//                 >
//                   <MorphingDialogImage
//                     src={product.image}
//                     alt={product.title}
//                     className="h-80 w-full object-contain bg-white p-4"
//                   />
//                   <div className="p-4 flex justify-center">
//                     {/* Removed the border from title */}
//                     <MorphingDialogTitle className="text-center text-black text-lg font-bold px-4 py-2 rounded-lg shadow-sm bg-gray-50 w-fit">
//                       {product.title}
//                     </MorphingDialogTitle>
//                   </div>
//                 </MorphingDialogTrigger>

//                 <MorphingDialogContainer>
//                   <motion.div
//                     style={{ borderRadius: '24px' }}
//                     className={`relative flex flex-col overflow-hidden border-2 shadow-xl sm:w-[480px] max-w-full max-h-[calc(100vh-4rem)] bg-gradient-to-b from-white via-${product.color.base}-50 to-white`}
//                     variants={dialogVariants}
//                     initial="hidden"
//                     animate="visible"
//                     exit="exit"
//                   >
//                     <MorphingDialogContent>
//                       <MorphingDialogImage
//                         src={product.image}
//                         alt={product.title}
//                         className="w-full h-[280px] object-contain bg-white p-6"
//                       />
//                       <div className="p-6 space-y-3 bg-white rounded-b-2xl flex flex-col">
//                         <MorphingDialogTitle
//                           className={`text-2xl font-bold border-b-2 pb-2 ${product.color.border} ${product.color.text}`}
//                         >
//                           {product.title}
//                         </MorphingDialogTitle>

//                         <MorphingDialogSubtitle className="text-md italic text-zinc-600">
//                           {product.subtitle}
//                         </MorphingDialogSubtitle>

//                         {/* Animate this div wrapping the Description */}
//                         <motion.div
//                           variants={descriptionVariants}
//                           initial="initial"
//                           animate="animate"
//                           exit="exit"
//                           className="text-sm flex-grow overflow-hidden"
//                         >
//                           <MorphingDialogDescription disableLayoutAnimation>
//                             <div>
//                               <h4
//                                 className={`font-semibold mb-2 pb-1 border-b-2 inline-block w-fit ${product.color.border}`}
//                               >
//                                 Features:
//                               </h4>

//                               <ul className="list-disc pl-6 space-y-1 leading-tight max-h-32 overflow-hidden">
//                                 {product.features.slice(0, 5).map((f, i) => (
//                                   <li key={i}>{f}</li>
//                                 ))}
//                               </ul>
//                             </div>

//                             <div className={`mt-4 grid grid-cols-3 gap-3 font-semibold ${product.color.text}`}>
//                               {['Water Demand', 'Pot Life', 'Coverage'].map((label, i) => {
//                                 const value = [product.water, product.potLife, product.coverage][i];
//                                 return (
//                                   <div
//                                     key={label}
//                                     className={`bg-gradient-to-tr ${product.color.from} ${product.color.to} rounded-xl p-3 text-center shadow-md cursor-default`}
//                                   >
//                                     <p className={`mb-1 text-xs ${product.color.text}`}>{label}</p>
//                                     <p className={`text-sm font-bold truncate ${product.color.text}`}>{value}</p>
//                                   </div>
//                                 );
//                               })}
//                             </div>
//                           </MorphingDialogDescription>
//                         </motion.div>
//                       </div>
//                     </MorphingDialogContent>
//                   </motion.div>
//                 </MorphingDialogContainer>
//               </MorphingDialog>
//             </motion.div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }
'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const ProductGrid = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

const products = [
  {
    title: 'ET1 - Small Sized Floor Tile Adhesive',
    image: '/images/ET1.png',
    subtitle: 'TechTile Adhesive',
    features: ['Ready to Use', 'High Bond Strength', 'Saves Time & Labour'],
    water: '23%–25%',
    potLife: '1.5 hrs @ 23°C',
    coverage: '30–40 sq ft / 20kg @ 6mm',
    color: {
      base: 'sky',
      text: 'text-sky-700',
      border: 'border-sky-200',
      bg: 'bg-sky-50',
      badgeBg: 'bg-sky-500',
      from: 'from-sky-50',
      to: 'to-sky-100',
    },
  },
  {
    title: 'ET2 - Medium Tile Adhesive',
    image: '/images/ET2.png',
    subtitle: 'TechTile Adhesive',
    features: ['Water Resistant', 'Easy Application', 'Strong Bonding'],
    water: '22%–24%',
    potLife: '2 hrs @ 23°C',
    coverage: '25–35 sq ft / 20kg @ 6mm',
    color: {
      base: '#4ba25c',
      text: 'text-[#4ba25c]',
      border: 'border-[#4ba25c]',
      bg: 'bg-[#e6f4ea]',
      badgeBg: 'bg-[#4ba25c]',
      from: 'from-[#e6f4ea]',
      to: 'to-[#4ba25c]',
    },
  },
  {
    title: 'ET3 - Large Tile Adhesive',
    image: '/images/ET3.png',
    subtitle: 'TechTile Adhesive',
    features: ['Slip-resistant Formula', 'Long-lasting Adhesion', 'Works On Multiple Surfaces'],
    water: '24%–27%',
    potLife: '1.5 – 2 Hours @ 23°C',
    coverage: '30–40 sq ft per 20kg @ 6mm',
    color: {
      base: 'orange',
      text: 'text-orange-500',
      border: 'border-orange-200',
      bg: 'bg-orange-50',
      badgeBg: 'bg-orange-500',
      from: 'from-orange-50',
      to: 'to-orange-100',
    },
  },
  {
    title: 'ET4 - Heavy Duty Adhesive',
    image: '/images/ET4.png',
    subtitle: 'TechTile Adhesive',
    features: ['Water Resistant', 'Easy Application', 'Strong Bonding'],
    water: '22%–24%',
    potLife: '2 hrs @ 23°C',
    coverage: '25–35 sq ft / 20kg @ 6mm',
    color: {
      base: '#7266a1',
      text: 'text-[#7266a1]',
      border: 'border-[#7266a1]',
      bg: 'bg-[#f0eef9]',
      badgeBg: 'bg-[#7266a1]',
      from: 'from-[#f0eef9]',
      to: 'to-[#7266a1]',
    },
  },
  {
    title: 'BJM - Tile Bond Mortar',
    image: '/images/BJM.png',
    subtitle: 'TechTile Adhesive',
    features: ['Water Resistant', 'Easy Application', 'Strong Bonding'],
    water: '22%–24%',
    potLife: '2 hrs @ 23°C',
    coverage: '25–35 sq ft / 20kg @ 6mm',
    color: {
      base: '#a0a0a0',
      text: 'text-[#a0a0a0]',
      border: 'border-[#a0a0a0]',
      bg: 'bg-[#f5f5f5]',
      badgeBg: 'bg-[#a0a0a0]',
      from: 'from-[#f5f5f5]',
      to: 'to-[#a0a0a0]',
    },
  },
  {
    title: 'Grout - Tile Joint Filler',
    image: '/images/Grout.png',
    subtitle: 'TechTile Adhesive',
    features: ['Water Resistant', 'Easy Application', 'Strong Bonding'],
    water: '22%–24%',
    potLife: '2 hrs @ 23°C',
    coverage: '25–35 sq ft / 20kg @ 6mm',
    color: {
      base: 'orange',
      text: 'text-orange-500',
      border: 'border-orange-200',
      bg: 'bg-orange-50',
      badgeBg: 'bg-orange-500',
      from: 'from-orange-50',
      to: 'to-orange-100',
    },
  },
];


  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-8">
        {products.map((product, i) => (
          <div
            key={i}
            onClick={() => setSelectedProduct(product)}
            className="cursor-pointer bg-white rounded-xl shadow-md hover:shadow-xl transition p-4"
          >
            <Image
              src={product.image}
              alt={product.title}
              width={300}
              height={300}
              className="w-full h-56 object-contain"
            />
            <h3 className="mt-4 text-lg font-semibold text-center">{product.title}</h3>
          </div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              className="bg-white max-w-6xl w-full rounded-xl overflow-hidden shadow-lg flex flex-col md:flex-row"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left Side Image */}
              <div className="bg-gray-100 p-6 md:w-1/2 flex items-center justify-center">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  width={400}
                  height={400}
                  className="w-full max-h-[400px] object-contain"
                />
              </div>

              {/* Right Side Content */}
              <div className="p-6 md:w-1/2 text-gray-800 font-sans space-y-6">
                {/* Header */}
                <div className="flex items-center space-x-3">
     <div className="flex overflow-hidden rounded-sm shadow-sm text-lg font-bold">
  {selectedProduct.title.startsWith('ET') ? (
    <>
      <div className="bg-gray-700 text-white px-3 py-1 flex items-center justify-center">
        ET
      </div>
      <div className="bg-orange-500 text-white px-3 py-1 flex items-center justify-center">
        {selectedProduct.title.replace('ET', '').split(' ')[0]}
      </div>
    </>
  ) : (
    <div className="bg-gray-700 text-white px-4 py-1 rounded-sm flex items-center justify-center">
      {selectedProduct.title.split(' - ')[0]}
    </div>
  )}
</div>


                  <h2 className="text-xl font-bold">4X8 Wall Tiles & Large Format Tile Adhesive</h2>
                </div>

                {/* Subtitle */}
                {/* <p className="italic text-sm text-gray-600">{selectedProduct.subtitle}</p> */}

                {/* Key Features */}
                <div>
                  <h4 className="text-[#f36f21] font-bold text-sm mb-2 uppercase">Key Features</h4>
                  <ul className="text-sm space-y-1 pl-1">
                    {selectedProduct.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="h-2 w-2 bg-[#f36f21] rounded-full mr-2" /> {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specs */}
                <div className="grid grid-cols-3 gap-4 text-center text-sm">
                  <div>
                    <p className="text-white bg-[#f36f21] text-xs font-bold px-2 py-1 rounded">WATER DEMAND</p>
                    <p className="mt-1 font-semibold">{selectedProduct.water}</p>
                  </div>
                  <div>
                    <p className="text-white bg-[#f36f21] text-xs font-bold px-2 py-1 rounded">POT LIFE</p>
                    <p className="mt-1 font-semibold">{selectedProduct.potLife}</p>
                  </div>
                  <div>
                    <p className="text-white bg-[#f36f21] text-xs font-bold px-2 py-1 rounded">COVERAGE</p>
                    <p className="mt-1 font-semibold">{selectedProduct.coverage}</p>
                  </div>
                </div>

                {/* How to Apply */}
                <div className="pt-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="bg-[#f36f21] text-white text-xs font-bold px-2 py-1 rounded">HOW TO APPLY</div>
                    <div className="flex-1 h-px bg-gray-300" />
                  </div>

                  <div className="flex justify-between text-center text-xs text-gray-700">
                    <div className="flex flex-col items-center space-y-1">
                      <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold">1</div>
                      <p className="leading-tight">CLEAN<br />SURFACE</p>
                    </div>
                    <div className="flex flex-col items-center space-y-1">
                      <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold">2</div>
                      <p className="leading-tight">MIX WITH<br />WATER</p>
                    </div>
                    <div className="flex flex-col items-center space-y-1">
                      <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold">3</div>
                      <p className="leading-tight">APPLY<br />UNIFORM LAYER</p>
                    </div>
                    <div className="flex flex-col items-center space-y-1">
                      <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold">4</div>
                      <p className="leading-tight">PLACE &<br />CLEAN JOINTS</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProductGrid;
