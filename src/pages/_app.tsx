import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"

import * as Dialog from '@radix-ui/react-dialog'

import logoImg from '../assets/logo.svg'
import { CartButton, Container, Header } from "../styles/pages/app"

import Image from "next/future/image"
import { CartModal } from "./components/cartModal"
<<<<<<< HEAD
import { CartProvider } from "use-shopping-cart"
import { CartButton } from "./components/cartButton"
=======
import { Handbag } from "phosphor-react"
>>>>>>> fe4529519a6621993e743f0f55d4d57af5021bf3

globalStyles()

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.STRIPE_SECRET_KEY}
      successUrl={`${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`}
      cancelUrl={`${process.env.NEXT_URL}/`}
      currency="BRL"
      allowedCountries={['BR']}
      billingAddressCollection={true}
    >
      <Container>
        <Header>
          <Image src={logoImg} alt="" />

<<<<<<< HEAD
          <Dialog.Root>
            
            <Dialog.Trigger asChild>
              <CartButton />
            </Dialog.Trigger>
=======
        <Dialog.Root>
          
          <Dialog.Trigger asChild>
            <CartButton css={{ $$cartItems: 1 }}>
              <Handbag size={24} weight="bold" />
              <span>10</span>
            </CartButton>
          </Dialog.Trigger>
>>>>>>> fe4529519a6621993e743f0f55d4d57af5021bf3

            <CartModal />
          </Dialog.Root>
        </Header>

        <Component {...pageProps} />
      </Container>
    </CartProvider>
  )
}
