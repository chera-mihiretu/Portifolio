'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Achievements = () => {
  const achievementsData = [
    {
      title: 'A2SV Hackathon',
      position: 'Top 8',
      description: 'Built a Localized AI project that supports Ethiopian local language speakers by enabling them to use language models in their native language.',
      icon: '🏆',
      date: '2023',
      category: 'Hackathon',
      image: '/assets/achievement/a2sv_hackathon.jpg'
    },
    {
      title: 'ICPC Ethiopian Collegiate Programming Contest',
      position: '12th Place',
      description: 'Achieved 12th place in intensive competitive programming, showcasing strong problem-solving skills and algorithmic expertise.',
      icon: '⚡',
      date: '2023',
      category: 'Competitive Programming',
      image: '/assets/achievement/icpc.png'
    }
  ];

  return (
    <section id="achievements" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Recognition of excellence and dedication
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {achievementsData.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-xl" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 opacity-20 blur-xl" />

              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                {/* Achievement Image */}
                <div className="relative h-48 w-full">
                  <Image
                    src={achievement.image}
                    alt={achievement.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* Achievement Content */}
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {achievement.title}
                        </h3>
                        <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                          {achievement.date}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="px-3 py-1 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full">
                          {achievement.position}
                        </span>
                        <span className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-full">
                          {achievement.category}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements; 