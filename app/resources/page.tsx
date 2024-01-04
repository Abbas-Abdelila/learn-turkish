import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources | Pick Turkish",
  description: "Resources for learning Turkish",
};

const Resources = () => {
  return (
    <div className="flex flex-col justify-center gap-5 mt-20">
      <h1 className="font-normal text-4xl text-center">📖 Books</h1>
      <h2 className="text-center font-normal text-3xl underline decoration-red-100 underline-offset-8">
        # 1. Yunus Emre Institute A1 to C2 Study Books Series
      </h2>
      <div className="image flex max-w-[400px] mx-auto p-3">
        <Image
          src="/yunus.jpg"
          width="250"
          height="238"
          alt="Book Image"
          className="rounded-lg"
        />
      </div>
      <div className="books grid sm:grid-cols-2 md:grid-cols-3 gap-12 justify-center items-center mx-auto">
        <p className="text-gray-800 dark:text-white">
          • Yedi Iklim A1 Study Book{" "}
          <span className="text-red-500 font-semibold">
            <Link target="_blank" href="https://cloudflare-ipfs.com/ipfs/bafykbzaceam7d4mjzwytixiiyjr4odbqurcdwpah6psgltof4llmlkkvtdtzy?filename=ibrahim%20gultekin%2C%20mahir%20kalfa%2C%20ibrahim%20atabey%20-%20Yedi%20%C4%B0klim%20T%C3%BCrk%C3%A7e%20A1%20Ders%20Kitab%C4%B1-Yunus%20Emre%20Enstit%C3%BCs%C3%BC%20%282015%29.pdf">
              [PDF]
            </Link>
          </span>
        </p>
        <p className="text-gray-800 dark:text-white">
          • Yedi Iklim A2 Study Book{" "}
          <span className="text-red-500 font-semibold">
            <Link target="_blank" href="https://cloudflare-ipfs.com/ipfs/bafykbzaceawdwgrsd4jnndqx4bo5hdxvl5nclk4nwbrzk4susfr2cje35lluk?filename=ibrahim%20gultekin%2C%20mahir%20kalfa%2C%20ibrahim%20atabey%20-%20Yedi%20%C4%B0klim%20T%C3%BCrk%C3%A7e%20A2%20Ders%20Kitab%C4%B1-Yunus%20Emre%20Enstit%C3%BCs%C3%BC%20%282015%29.pdf">
              [PDF]
            </Link>
          </span>
        </p>
        <p className="text-gray-800 dark:text-white">
          • Yedi Iklim B1 Study Book{" "}
          <span className="text-red-500 font-semibold">
            <Link target="_blank" href="https://cloudflare-ipfs.com/ipfs/bafykbzacecwbfdtfjwsm6s2vlfl6pvpbvebmqbtua7acu56zgfxdymljrjeyq?filename=ibrahim%20gultekin%2C%20mahir%20kalfa%2C%20ibrahim%20atabey%20-%20Yedi%20%C4%B0klim%20T%C3%BCrk%C3%A7e%20B1%20Ders%20Kitab%C4%B1-Yunus%20Emre%20Enstit%C3%BCs%C3%BC%20%282015%29.pdf">
              [PDF]
            </Link>
          </span>
        </p>
        <p className="text-gray-800 dark:text-white">
          • Yedi Iklim B2 Study Book{" "}
          <span className="text-red-500 font-semibold">
            <Link target="_blank" href="https://cloudflare-ipfs.com/ipfs/bafykbzaceca3jhxelwrjodya6jxdj3i6gesjrfbz6koyaopnz72jyinzurnmy?filename=ibrahim%20gultekin%2C%20mahir%20kalfa%2C%20ibrahim%20atabey%20-%20Yedi%20%C4%B0klim%20T%C3%BCrk%C3%A7e%20B2%20Ders%20Kitab%C4%B1-Yunus%20Emre%20Enstit%C3%BCs%C3%BC%20%282016%29.pdf">
              [PDF]
            </Link>
          </span>
        </p>
        <p className="text-gray-800 dark:text-white">
          • Yedi Iklim C1 Study Book{" "}
          <span className="text-red-500 font-semibold">
            <Link target="_blank" href="https://cloudflare-ipfs.com/ipfs/bafykbzacedqhxle7qbu2i667ri6qefacbywwb2dj62jtdxpo6x3qairnq2pai?filename=ibrahim%20gultekin%2C%20mahir%20kalfa%2C%20ibrahim%20atabey%20-%20Yedi%20%C4%B0klim%20T%C3%BCrk%C3%A7e%20C1%20Ders%20Kitab%C4%B1-Yunus%20Emre%20Enstit%C3%BCs%C3%BC%20%282016%29.pdf">
              [PDF]
            </Link>
          </span>
        </p>
        <p className="text-gray-800 dark:text-white">
          • Yedi Iklim C2 Study Book{" "}
          <span className="text-red-500 font-semibold">
            <Link target="_blank" href="https://cloudflare-ipfs.com/ipfs/bafykbzacecrpjkfbbersfpi3jq4eg3ws6tkoz7xtgy3qrdwsopwb6dn54477y?filename=ibrahim%20gultekin%2C%20mahir%20kalfa%2C%20ibrahim%20atabey%2C%20erol%20barin%20-%20Yedi%20%C4%B0klim%20T%C3%BCrk%C3%A7e%20C2%20Ders%20Kitab%C4%B1-Yunus%20Emre%20Enstit%C3%BCs%C3%BC%20%282016%29.pdf">
              [PDF]
            </Link>
          </span>
        </p>
      </div>
      <br />
      <h2 className="text-center font-normal text-3xl underline decoration-red-100 underline-offset-8">
        # 2. Istanbul Turkish For Foreigners Series
      </h2>
      <div className="image flex max-w-[400px] mx-auto p-3">
        <Image
          src="/istanbul-kitap.png"
          width={247.5}
          height={260.5}
          alt="Book Image"
          className="rounded-3xl object-cover"
        />
      </div>
      <div className="books grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 justify-center items-center mx-auto p-4 mb-12">
        <p className="text-gray-800 dark:text-white md:w-[230px] ">
          • Istanbul Yabancılar için Türkçe <span className="font-medium text-red-500">A1</span> Study Book{" "}
          <span className="text-red-500 font-semibold">
            <Link target="_blank" href="https://cloudflare-ipfs.com/ipfs/bafykbzaceapfah3tsr76lanjiwgly6h6guwmgnbqi6fkotb26tztxi24s3mc4?filename=%20-%20%C4%B0stanbul.%20Yabanc%C4%B1lar%20%C4%B0%C3%A7in%20T%C3%BCrk%C3%A7e%20Ders%20Kitab%C4%B1%20A1.pdf">
              [PDF]
            </Link>
          </span>
        </p>
        <p className="text-gray-800 dark:text-white md:w-[230px]">
          • Istanbul Yabancılar için Türkçe <span className="font-medium text-red-500">A2</span> Study Book{" "}
          <span className="text-red-500 font-semibold">
            <Link target="_blank" href="https://cloudflare-ipfs.com/ipfs/bafykbzaceawdwgrsd4jnndqx4bo5hdxvl5nclk4nwbrzk4susfr2cje35lluk?filename=ibrahim%20gultekin%2C%20mahir%20kalfa%2C%20ibrahim%20atabey%20-%20Yedi%20%C4%B0klim%20T%C3%BCrk%C3%A7e%20A2%20Ders%20Kitab%C4%B1-Yunus%20Emre%20Enstit%C3%BCs%C3%BC%20%282015%29.pdf">
              [PDF]
            </Link>
          </span>
        </p>
        <p className="text-gray-800 dark:text-white md:w-[230px]">
          • Istanbul Yabancılar için Türkçe <span className="font-medium text-red-500">B1</span> Study Book{" "}
          <span className="text-red-500 font-semibold">
            <Link target="_blank" href="https://cloudflare-ipfs.com/ipfs/bafykbzacealgron6ogv55qlaa6lvewx6oangvmnwq5psnynhmqwyy4gr5rj3u?filename=%20-%20%C4%B0stanbul.%20Yabanc%C4%B1lar%20%C4%B0%C3%A7in%20T%C3%BCrk%C3%A7e%20B1_%20Ders%20Kitab%C4%B1.pdf">
              [PDF]
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Resources;
