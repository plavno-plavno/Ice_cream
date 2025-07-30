// import React, { useState, useEffect, useRef } from 'react'
import './App.css'

// // Constants
// const PAGES = {
//   LANDING: 1,
//   MACHINE: 2,
//   SUCCESS: 3
// }

// const TIMERS = {
//   INACTIVITY: 10000, // 10 seconds
//   LOADING: 30000,    // 30 seconds
//   SUCCESS: 5000      // 5 seconds
// }

// const LOADING_STEP = 100 / (TIMERS.LOADING / 1000) // Progress per second

// // Custom hook for timer management
// const useTimer = () => {
//   const timerRef = useRef(null)
  
//   const clearTimer = () => {
//     if (timerRef.current) {
//       clearTimeout(timerRef.current)
//       timerRef.current = null
//     }
//   }
  
//   const setTimer = (callback, delay) => {
//     clearTimer()
//     timerRef.current = setTimeout(callback, delay)
//   }
  
//   useEffect(() => {
//     return clearTimer
//   }, [])
  
//   return { setTimer, clearTimer }
// }

// // Custom hook for interval management
// const useInterval = () => {
//   const intervalRef = useRef(null)
  
//   const clearInterval = () => {
//     if (intervalRef.current) {
//       window.clearInterval(intervalRef.current)
//       intervalRef.current = null
//     }
//   }
  
//   const setInterval = (callback, delay) => {
//     clearInterval()
//     intervalRef.current = window.setInterval(callback, delay)
//   }
  
//   useEffect(() => {
//     return clearInterval
//   }, [])
  
//   return { setInterval, clearInterval }
// }

// // Custom hook for loading state
// const useLoadingState = () => {
//   const [isLoading, setIsLoading] = useState(false)
//   const [loadingProgress, setLoadingProgress] = useState(0)
//   const [countdown, setCountdown] = useState(30)
  
//   const resetLoading = () => {
//     setLoadingProgress(0)
//     setCountdown(30)
//   }
  
//   return {
//     isLoading,
//     setIsLoading,
//     loadingProgress,
//     setLoadingProgress,
//     countdown,
//     setCountdown,
//     resetLoading
//   }
// }

// // Landing Page Component
// const LandingPage = () => (
//   <div className="page page-1">
//     <div className="logo-text">glavia</div>
//     <img 
//       src="/images/group_ice_cream.png" 
//       alt="Ice Cream Group" 
//       className="group-ice-cream-bottom"
//     />
//   </div>
// )

// // Start Button Component
// const StartButton = ({ isLoading, loadingProgress, onStart }) => (
//   <button 
//     className={`start-button ${isLoading ? 'loading' : ''}`}
//     onClick={onStart}
//     disabled={isLoading}
//   >
//     {isLoading ? (
//       <>
//         <div className="loading-fill" style={{width: `${loadingProgress}%`}}></div>
//         <span className="button-text">{Math.round(loadingProgress)}%</span>
//       </>
//     ) : (
//       <span className="button-text">Start</span>
//     )}
//   </button>
// )

// // Machine Page Component
// const MachinePage = ({ 
//   isLoading, 
//   countdown, 
//   loadingProgress, 
//   onStart, 
//   onInteraction 
// }) => (
//   <div className="page page-2" onClick={onInteraction}>
//     <div className="instruction-text">
//       {isLoading ? 
//         `Your ice-cream will be ready in ${countdown}...` : 
//         "Insert the capsule into the machine and press the start button"
//       }
//     </div>
    
//     <div className="ice-cream-block">
//       <div className="ice-cream-image-container">
//         <img 
//           src="/images/ice_cream.png" 
//           alt="Ice Cream" 
//           className="ice-cream-image"
//         />
//       </div>
      
//       <StartButton 
//         isLoading={isLoading}
//         loadingProgress={loadingProgress}
//         onStart={onStart}
//       />
//     </div>
//   </div>
// )

// // Success Page Component
// const SuccessPage = () => (
//   <div className="page page-3">
//     <img 
//       src="/images/group_ice_cream.png" 
//       alt="Ice Cream Group" 
//       className="group-ice-cream-right"
//     />
//     <div className="success-container">
//       <img 
//         src="/images/success.png" 
//         alt="Success" 
//         className="success-image"
//       />
//       <div className="success-text">Your ice-cream is ready!</div>
//     </div>
//   </div>
// )

// Main App Component
function App() {
  // const [currentPage, setCurrentPage] = useState(PAGES.LANDING)
  // const {
  //   isLoading,
  //   setIsLoading,
  //   loadingProgress,
  //   setLoadingProgress,
  //   countdown,
  //   setCountdown,
  //   resetLoading
  // } = useLoadingState()
  
  // const inactivityTimer = useTimer()
  // const loadingInterval = useInterval()
  // const successTimer = useTimer()
  
  // // Keep track of loading state for timer callback
  // const isLoadingRef = useRef(false)

  // // Handle inactivity timer
  // const resetInactivityTimer = () => {
  //   if (currentPage === PAGES.MACHINE && !isLoading) {
  //     inactivityTimer.setTimer(() => {
  //       // Double check that we're still not loading when timer fires
  //       if (!isLoadingRef.current) {
  //         setCurrentPage(prev => {
  //           // Only go to landing if we're still on machine page
  //           return prev === PAGES.MACHINE ? PAGES.LANDING : prev
  //         })
  //       }
  //     }, TIMERS.INACTIVITY)
  //   }
  // }

  // // Handle loading process
  // const startLoadingProcess = () => {
  //   setIsLoading(true)
  //   resetLoading()
  //   inactivityTimer.clearTimer()

  //   loadingInterval.setInterval(() => {
  //     setLoadingProgress(prev => {
  //       const newProgress = prev + LOADING_STEP
  //       if (newProgress >= 100) {
  //         loadingInterval.clearInterval()
  //         setIsLoading(false)
  //         setCurrentPage(PAGES.SUCCESS)
  //         return 100
  //       }
  //       return newProgress
  //     })
      
  //     setCountdown(prev => Math.max(0, prev - 1))
  //   }, 1000)
  // }

  // // Page navigation handlers
  // const handleLandingClick = () => {
  //   if (currentPage === PAGES.LANDING) {
  //     setCurrentPage(PAGES.MACHINE)
  //   }
  // }

  // const handleMachineInteraction = () => {
  //   resetInactivityTimer()
  // }

  // // Effects
  // useEffect(() => {
  //   isLoadingRef.current = isLoading
  //   resetInactivityTimer()
  // }, [currentPage, isLoading])

  // useEffect(() => {
  //   if (currentPage === PAGES.SUCCESS) {
  //     successTimer.setTimer(() => {
  //       setCurrentPage(PAGES.MACHINE)
  //       resetLoading()
  //     }, TIMERS.SUCCESS)
  //   }
  // }, [currentPage])

  // // Render current page
  // const renderCurrentPage = () => {
  //   switch (currentPage) {
  //     case PAGES.LANDING:
  //       return <LandingPage />
  //     case PAGES.MACHINE:
  //       return (
  //         <MachinePage
  //           isLoading={isLoading}
  //           countdown={countdown}
  //           loadingProgress={loadingProgress}
  //           onStart={startLoadingProcess}
  //           onInteraction={handleMachineInteraction}
  //         />
  //       )
  //     case PAGES.SUCCESS:
  //       return <SuccessPage />
  //     default:
  //       return <LandingPage />
  //   }
  // }

  return (
    // <div className="app" onClick={currentPage === PAGES.LANDING ? handleLandingClick : undefined}>
    //   <div className="sidebar"/>
    //   <div className="content">
    //     {renderCurrentPage()}
    //   </div>
    // </div>
    <div className="app">
      <div className="sidebar"/>
      <div className="content">
        TEST
        {/* {renderCurrentPage()} */}
      </div>
    </div>
  )
}

export default App 