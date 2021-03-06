/* eslint-disable @next/next/no-img-element */
import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react'
import React from 'react'
import tw from 'tailwind-styled-components'

const Wrapper = tw.div`
flex 
flex-col
h-screen
lg:grid
lg:grid-cols-10 
`

function NFTDropPage() {
  const connectWithMetamask = useMetamask()
  const address = useAddress()
  const disconnect = useDisconnect()

  return (
    <Wrapper>
      <div className="bg-gradient-to-tr from-cyan-800 to-rose-500 lg:col-span-4">
        <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
          <div className="rounded-xl bg-gradient-to-br from-yellow-400 to-purple-600 p-2">
            <img
              className="w-44 rounded-lg object-cover lg:h-96 lg:w-72"
              src="https://links.papareact.com/8sg"
              alt="nft"
            />
          </div>

          <div className="space-y-2 p-5 text-center">
            <h1 className="text-4xl font-bold text-white">Papafarm</h1>
            <h2 className="text-xl text-gray-300">
              a collections of apes wholives & breas reacks
            </h2>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-12 lg:col-span-6">
        <header className="flex items-center justify-between">
          <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-80">
            The{' '}
            <span className="font-extrabold underline decoration-pink-600/5">
              Perosa
            </span>{' '}
            NFT Market Place
          </h1>
          <button
            onClick={() => {
              address ? disconnect() : connectWithMetamask()
            }}
            className="rounded-full bg-rose-400 px-4 py-2 text-xs font-bold text-white lg:px-5 lg:py-3 lg:text-base"
          >
            {address ? 'Sign Out' : 'Sign in'}
          </button>
        </header>
        <h5 className="my-2 border"></h5>

        {address && (
          <p className="text-center text-sm text-rose-400">
            You&apos;re logged in with wallet {address.substring(0, 5)}...{' '}
            {address.substring(address.length - 5)}
          </p>
        )}
        <div className="mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:justify-center lg:space-y-0">
          <img
            className="w-80 object-cover pb-10 lg:h-40"
            src="https://links.papareact.com/bdy"
            alt="nft2"
          />
          <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold">
            The Perosa api Coding Club | NFT DRop
          </h1>
          <p className="pt-2 text-xl text-green-500">
            13 /21 NFT&#39;s clained
          </p>
        </div>
        <button className="mt-10 h-16 w-full cursor-pointer rounded-full bg-red-600 text-white">
          Mint NFT (010.1 ETH)
        </button>
      </div>
    </Wrapper>
  )
}

export default NFTDropPage
