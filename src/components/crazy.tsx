'use client';

import React from 'react';
import { Bot } from 'lucide-react';
const Crazy = () => {
  return (
    <div className="mx-auto w-full text-center">
      <div className="mb-4">
        <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
          The Bot That acted Crazy!
        </h2>
      </div>
      <div className="flex justify-center items-center p-6 bg-accent rounded-xl">
        <Bot className="h-20 w-20 text-primary" />
      </div>
      <p className="text-muted-foreground mt-4">
        As a Data enthusiast, I built this quirky bot to showcase my skills in AI and machine learning. Feel free to interact with it and see what it can do!
      </p>
    </div>
  );
};

export default Crazy;