package com.mobileapp

import android.os.Bundle   
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint

class MainActivity : ReactActivity() {
  override fun getMainComponentName(): String {
        return "MobileApp"  
    }

  override fun createReactActivityDelegate(): ReactActivityDelegate {
    return DefaultReactActivityDelegate(
      this,
      mainComponentName,
      // Enable Fabric and Concurrent React (React 18)
      DefaultNewArchitectureEntryPoint.fabricEnabled,
      DefaultNewArchitectureEntryPoint.concurrentReactEnabled
    )
  }
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(null)
  }
}
