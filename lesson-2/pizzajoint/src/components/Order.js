import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      // delay: 0.2,
      mass: 0.4, // adjust for delay but faster
      damping: 8,  // adjust for spring but faster
      stiffness: 120,
      when: 'beforeChildren', // parent run first
      staggerChildren: 0.4 // children copy parent variant and set delay 0.4
    }
  }
}

const childVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  },
  exit: {
    x: '-1000vw',
    transition: {ease: 'easeInOut'}
  }
}

const Order = ({ pizza,setShowModal }) => {

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true)
    }, 5000)
  }, [setShowModal])

  return (
    <motion.div className="container order"
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
     <h2 >Thank you for your order :)</h2>
      <motion.p variants={childVariants}>You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;