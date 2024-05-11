-- CreateTable
CREATE TABLE "Track" (
    "id" SERIAL NOT NULL,
    "dissId" TEXT NOT NULL,
    "respId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Track_pkey" PRIMARY KEY ("id")
);
