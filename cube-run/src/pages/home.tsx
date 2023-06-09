import { Icon } from "@iconify/react";
import {
  CSSProperties,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  return (
    <div
      className="w-full h-screen bg-black/50 bg-cover"
      style={{ backgroundImage: "url(/bg.jpg)" } as CSSProperties}
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <p className="text-8xl text-white font-extrabold tracking-widest">
          LEAVUNITY
        </p>
        <p className="text-2xl text-white font-normal tracking-widest">
          For those in needs
        </p>
      </div>
      <div className="bottom-4 tracking-widest italic absolute text-white text-center w-full animate-bounce motion-reduce:animate-none">
        scroll down to begin shopping
      </div>
    </div>
  );
}

function UserStatus() {
  const [leafCount, setLeafCount] = useState<number>(-1);
  const [givenLeafCount, setGivenLeafCount] = useState<number>(-1);

  return (
    <div className="w-full h-96 flex flex-col justify-center items-center gap-2">
      <div className="flex flex-row items-end gap-4">
        <div className="flex flex-col gap-2">
          <div className="h-48 w-32 relative shadow-inner bg-gray-100">
            <Icon
              icon="tabler:leaf"
              width="5rem"
              color="#13cf32"
              className="animate-expand-move-contract absolute motion-reduce:animate-none"
            />
          </div>
          <div className="font-bold text-xl text-center">Leaves used</div>
          <div className="font-light text-lg text-center">
            {leafCount - givenLeafCount}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="h-64 w-64 relative">
            <Icon
              icon="fluent:leaf-three-16-filled"
              color="#13cf32"
              width="15rem"
            />
          </div>
          <div className="font-bold text-xl text-center">Your balance</div>
          <div className="font-light text-lg text-center">{leafCount}</div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="h-48 w-32 relative shadow-inner bg-gray-100">
            <Icon
              icon="tabler:leaf"
              width="5rem"
              color="#13cf32"
              className="animate-expand-move-contract absolute motion-reduce:animate-none"
              style={
                {
                  animationDirection: "reverse",
                  animationDelay: "500ms",
                } as CSSProperties
              }
            />
          </div>
          <div className="font-bold text-xl text-center">Leaves received</div>
          <div className="font-light text-lg text-center">{givenLeafCount}</div>
        </div>
      </div>
    </div>
  );
}

const cartContext = createContext({
  cartCount: 0,
  setCartCount: (count: number) => {},
});

export function Navigator() {
  const nav = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);
  const cartCon = useContext(cartContext);
  const [leafCount, setLeafCount] = useState<number>(-1);

  return (
    <div className="w-full h-20 bg-secondary flex justify-center items-center text-xl">
      <div className="w-2/3 h-full flex flex-row justify-between items-center">
        <div className="flex flex-row gap-2 h-full">
          <div className="flex items-center">
            <Icon
              icon="fluent:leaf-three-16-filled"
              color="#fff"
              width="3rem"
            />
            <div className="text-white rounded-lg absolute -bottom-4 -translate-x-8 z-10 bg-secondary text-xl font-bold py-1 px-2">
              {leafCount}
            </div>
          </div>
          <button onClick={() => nav("/home")}>Home</button>
          <button
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
          >
            <div>Products</div>
            <div
              className={`absolute top-full w-full transition-all left-0 bg-secondary ${
                isExpanded ? "h-48" : "h-0"
              }`}
            >
              {!isExpanded ? (
                <></>
              ) : (
                <div className="grid grid-cols-3 text-left w-2/3 mx-auto">
                  <a className="hover:underline font-semibold" href="/home">
                    Digital
                  </a>
                  <a className="hover:underline font-light" href="/home">
                    Surveys
                  </a>
                  <a className="hover:underline font-light" href="/home">
                    Ebooks
                  </a>
                  <a className="hover:underline font-light" href="/home">
                    Quotes and messages
                  </a>
                  <a className="hover:underline font-light" href="/home">
                    Job offer
                  </a>
                  <a className="hover:underline font-light" href="/home">
                    Furniture
                  </a>
                  <a className="hover:underline font-light" href="/home">
                    Kitchen appliances
                  </a>
                  <a className="hover:underline font-light" href="/home">
                    Others
                  </a>
                  <a className="hover:underline font-semibold" href="/home">
                    Physical items
                  </a>
                </div>
              )}
            </div>
          </button>
        </div>
        <div className="flex flex-row gap-4">
          <div>
            <label
              htmlFor="hs-trailing-button-add-on-with-icon-and-button"
              className="sr-only"
            >
              Label
            </label>
            <div className="relative flex rounded-md shadow-sm">
              <input
                type="text"
                id="hs-trailing-button-add-on-with-icon-and-button"
                name="hs-trailing-button-add-on-with-icon-and-button"
                className="py-3 px-4 pl-11 block w-full border-gray-200 shadow-sm rounded-l-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
                <svg
                  className="h-4 w-4 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </div>
              <button
                type="button"
                className="py-3 px-4 inline-flex flex-shrink-0 justify-center items-center rounded-l-none rounded-r-md border border-transparent font-semibold bg-primary text-black hover:bg-primaryHover active:bg-primaryActive transition-color text-sm"
              >
                Search
              </button>
            </div>
          </div>
          <button
            className="rounded-full bg-secondary aspect-square w-12 h-12 flex items-center justify-center relative p-0"
            onClick={() => nav("/request")}
          >
            <Icon icon="ic:outline-shopping-cart" width="2rem" color="#fff" />
            <div className="absolute rounded-full bg-red-500 font-bold text-white px-2 py-1 -right-3 -bottom-2 text-sm">
              {cartCon.cartCount}
            </div>
          </button>
          <button
            className="p-0 rounded-full"
            onClick={() => {
              nav("/account");
            }}
          >
            <img
              src="/account-circle.svg"
              className="rounded-full w-12 h-12 object-cover bg-secondary hover:brightness-95 active:brightness-80"
              alt="user image"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

function Card(props: {
  title: string;
  productId: string;
  description: string;
  href: string;
  image: string;
  callback: any;
}) {

  return (
    <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
      <img
        className="h-36 rounded-t-xl object-cover"
        src={props.image}
        alt="Product Image"
      />
      <div className="p-4 md:p-5">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
          {props.title}
        </h3>
        <p className="mt-1 text-gray-800 dark:text-gray-400 line-clamp-3">
          {props.description}
        </p>
        <a
          className="mt-3 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-secondary text-white hover:bg-secondaryHover transition-all text-sm cursor-pointer"
          onClick={() => {
            props.callback();
          }}
        >
          Add to cart
        </a>
      </div>
    </div>
  );
}

function ProductSection(props: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`w-full flex flex-col items-center ${props.className ?? ""}`}
    >
      <div className="w-2/3 h-20 flex flex-row justify-between items-center">
        <div className="font-bold text-2xl">{props.label}</div>
        <button className="text-sm font-bold">See all</button>
      </div>
      <div className="w-2/3 flex flex-row gap-4 overflow-x-auto scrollbar-thin scrollbar-track-slate-50 scrollbar-thumb-slate-200 pb-2">
        {props.children}
      </div>
    </div>
  );
}

export default function Home() {
  const [products, setProducts] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [cartCount, setCartCount] = useState<number>(0);
  const nav = useNavigate();

  return (
    <cartContext.Provider value={{ cartCount, setCartCount }}>
      <div className="w-full h-full">
        <Header />
        <UserStatus />
        <div className="sticky top-0 z-10">
          <Navigator />
        </div>
        <ProductSection label="Popular right now">
          <Card
            callback={undefined}
            productId="1"
            title="Product 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nunc nisl ultricies nisl, vitae ultricies nisl nunc eget nisl. Sed euismod, nisl vitae ultricies lacinia, nunc nisl ultricies nisl, vitae ultricies nisl nunc eget nisl."
            href="#"
            image="/product_1.jpg"
          />
          <Card
            callback={undefined}
            productId="1"
            title="Product 2"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nunc nisl ultricies nisl, vitae ultricies nisl nunc eget nisl. Sed euismod, nisl vitae ultricies lacinia, nunc nisl ultricies nisl, vitae ultricies nisl nunc eget nisl."
            href="#"
            image="/product_2.jpg"
          />
          <Card
            callback={undefined}
            productId="1"
            title="Product 3"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nunc nisl ultricies nisl, vitae ultricies nisl nunc eget nisl. Sed euismod, nisl vitae ultricies lacinia, nunc nisl ultricies nisl, vitae ultricies nisl nunc eget nisl."
            href="#"
            image="/product_3.jpg"
          />
          <Card
            callback={undefined}
            productId="1"
            title="Product 4"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nunc nisl ultricies nisl, vitae ultricies nisl nunc eget nisl. Sed euismod, nisl vitae ultricies lacinia, nunc nisl ultricies nisl, vitae ultricies nisl nunc eget nisl."
            href="#"
            image="/product_4.jpg"
          />
        </ProductSection>
        <ProductSection label="New offers">
          <Card
            callback={undefined}
            productId="1"
            title="Product 5"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nunc nisl ultricies nisl, vitae ultricies nisl nunc eget nisl. Sed euismod, nisl vitae ultricies lacinia, nunc nisl ultricies nisl, vitae ultricies nisl nunc eget nisl."
            href="#"
            image="/product_1.jpg"
          />
          <Card
            callback={undefined}
            productId="1"
            title="Product 6"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nunc nisl ultricies nisl, vitae ultricies nisl nunc eget nisl. Sed euismod, nisl vitae ultricies lacinia, nunc nisl ultricies nisl, vitae ultricies nisl nunc eget nisl."
            href="#"
            image="/product_4.jpg"
          />
          <Card
            callback={undefined}
            productId="1"
            title="Product 7"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nunc nisl ultricies nisl, vitae ultricies nisl nunc eget nisl. Sed euismod, nisl vitae ultricies lacinia, nunc nisl ultricies nisl, vitae ultricies nisl nunc eget nisl."
            href="#"
            image="/product_3.jpg"
          />
          <Card
            callback={undefined}
            productId="1"
            title="Product 8"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nunc nisl ultricies nisl, vitae ultricies nisl nunc eget nisl. Sed euismod, nisl vitae ultricies lacinia, nunc nisl ultricies nisl, vitae ultricies nisl nunc eget nisl."
            href="#"
            image="/product_2.jpg"
          />
          <Card
            callback={undefined}
            productId="1"
            title="Product 7"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nunc nisl ultricies nisl, vitae ultricies nisl nunc eget nisl. Sed euismod, nisl vitae ultricies lacinia, nunc nisl ultricies nisl, vitae ultricies nisl nunc eget nisl."
            href="#"
            image="/product_3.jpg"
          />
        </ProductSection>
        <ProductSection label="Surveys">
          {}
          <Card
            callback={undefined}
            productId="1"
            title="Product 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nunc nisl ultricies nisl, vitae ultricies nisl nunc eget nisl. Sed euismod, nisl vitae ultricies lacinia, nunc nisl ultricies nisl, vitae ultricies nisl nunc eget nisl."
            href="#"
            image="/product_1.jpg"
          />
          <Card
            callback={undefined}
            productId="1"
            title="Product 2"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nunc nisl ultricies nisl, vitae ultricies nisl nunc eget nisl. Sed euismod, nisl vitae ultricies lacinia, nunc nisl ultricies nisl, vitae ultricies nisl nunc eget nisl."
            href="#"
            image="/product_2.jpg"
          />
          <Card
            callback={undefined}
            productId="1"
            title="Product 2"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nunc nisl ultricies nisl, vitae ultricies nisl nunc eget nisl. Sed euismod, nisl vitae ultricies lacinia, nunc nisl ultricies nisl, vitae ultricies nisl nunc eget nisl."
            href="#"
            image="/product_2.jpg"
          />
          <Card
            callback={undefined}
            productId="1"
            title="Product 2"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nunc nisl ultricies nisl, vitae ultricies nisl nunc eget nisl. Sed euismod, nisl vitae ultricies lacinia, nunc nisl ultricies nisl, vitae ultricies nisl nunc eget nisl."
            href="#"
            image="/product_2.jpg"
          />
          <Card
            callback={undefined}
            productId="1"
            title="Product 3"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nunc nisl ultricies nisl, vitae ultricies nisl nunc eget nisl. Sed euismod, nisl vitae ultricies lacinia, nunc nisl ultricies nisl, vitae ultricies nisl nunc eget nisl."
            href="#"
            image="/product_3.jpg"
          />
          <Card
            callback={undefined}
            productId="1"
            title="Product 4"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nunc nisl ultricies nisl, vitae ultricies nisl nunc eget nisl. Sed euismod, nisl vitae ultricies lacinia, nunc nisl ultricies nisl, vitae ultricies nisl nunc eget nisl."
            href="#"
            image="/product_4.jpg"
          />
        </ProductSection>
        <div className="flex w-full justify-center">
          <div className="w-2/3 flex flex-col justify-start">
            <div className="font-bold text-2xl pt-8 pb-4">
              All available offers
            </div>
            <div className="grid grid-cols-5 gap-4">
              {products.map((product: any) => {
                return (
                  <Card
                    callback={() => {
                      setCartCount(cartCount + 1);
                    }}
                    productId={product.id}
                    key={product.id}
                    title={product.name}
                    description={product.descript}
                    href="#"
                    image="/product_4.jpg"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </cartContext.Provider>
  );
}