'use client';
import React from 'react';
import Link from "next/link";
import {socials} from "@/constants/socials";
import {IconBrandGithubFilled, IconBrandLinkedinFilled} from "@tabler/icons-react";
import {motion} from 'framer-motion';

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center lg:p-16 md:p-8 p-4 gap-8">
      <motion.hr
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1}}
        className="border w-full border-accent"
      />
      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0, y: 20}}
        whileInView={{ opacity: 1, y: 0}}
        viewport={{ once: true}}
        transition={{ duration: .5, delay: 1}}
        className="flex items-center justify-center gap-4"
      >
        <Link href={socials.linkedIn} target="_blank"
              className="bg-foreground text-background p-4 flex items-center justify-center text-3xl hover:bg-accent duration-300 rounded-full">
          <IconBrandLinkedinFilled className="size-6"/>
        </Link>
        <Link href={socials.gitHub} target="_blank"
              className="bg-foreground text-background p-4 flex items-center justify-center text-3xl hover:bg-accent duration-300 rounded-full">
          <IconBrandGithubFilled className="size-6"/>
        </Link>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0}}
        viewport={{ once: true }}
        transition={{ duration: .5, delay: 1.5}}
        className="text-xs"
      >
        &copy; 2026 Tyler Wade. All Rights Reserved.
      </motion.p>
    </div>
  );
};

export default Footer;