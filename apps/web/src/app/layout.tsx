import "./globals.css";

import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity";
import type { PropsWithChildren } from "react";

export default function RootLayout({ children }: PropsWithChildren) {
  const { isEnabled } = draftMode();

  return (
    <html lang="en">
      <body>
        {isEnabled && (
          <a
            className="fixed right-0 bottom-0 bg-blue-500 text-white p-4 m-4"
            href="/api/draft-mode/disable"
          >
            Disable preview mode
          </a>
        )}
        {children}
        <VisualEditing />
      </body>
    </html>
  );
}
