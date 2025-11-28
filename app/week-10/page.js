"use client";
import React from "react";
import Link from "next/link";

// Part 5: landing page starts
// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";

const LandingPage = () => {
  // Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // Sign in to Firebase with GitHub authentication
  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("GitHub sign-in failed:", error);
    }
  };

  // Sign out of Firebase
  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Sign-out failed:", error);
    }
  };

  return (
 <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white px-4">
  {!user ? (
    <button
      onClick={handleSignIn}
      className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-200"
    >
      Sign In with GitHub
    </button>
  ) : (
    <>
      {/* Display some of the user's information */}
      <p className="mb-4 text-lg font-medium">
        Welcome, <span className="font-bold">{user.displayName}</span> ({user.email})
      </p>
      <div className="flex gap-4">
        <button
          onClick={handleSignOut}
          className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md shadow-sm transition duration-200"
        >
          Sign Out
        </button>
        <Link href="/week-10/shopping-list">
          <button className="px-5 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md shadow-sm transition duration-200">
            Go to Shopping List
          </button>
        </Link>
      </div>
    </>
  )}
</div>
  );
};

export default LandingPage;
// Part 5: landing page ends