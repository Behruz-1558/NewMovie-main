import React from "react";
import { useParams } from "react-router-dom";
import Banner from "../Components/Main/Banner";
import Slider from "../Components/Main/Slider";

const Actor = () => {
  const { id } = useParams();

  return (
    <div>
      <div className="min-h-screen  bg-black text-white flex justify-center px-25 pt-35 gap-20">
        <div className="w-100 h-150">
          <img
            src={`https://i.pravatar.cc/150?u=${id}`}
            alt="actor"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full ">
          <h1 className="text-[30px] font-bold">Bilmadim</h1>
          <h1 className="text-[15px] text-gray-500">Biography</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil magnam fugiat, asperiores libero quaerat perspiciatis unde sit laborum soluta sapiente illo omnis necessitatibus ut quo natus possimus! Nesciunt optio perferendis eaque repudiandae vitae explicabo pariatur aliquam, reiciendis debitis inventore non molestias eligendi. Repellat, tenetur culpa nemo cum tempora incidunt deleniti iure iusto. Aspernatur, aut totam. Excepturi quam rerum praesentium assumenda nam culpa pariatur distinctio vero soluta enim, officiis ipsam numquam ducimus similique eaque eveniet laboriosam facere magnam! Repellendus corporis quia ex, voluptates temporibus cupiditate eligendi id fuga fugit provident harum sequi! Dignissimos repellendus quas nulla a fugit? Minima unde praesentium eligendi voluptate amet earum deleniti, reprehenderit perspiciatis magnam sunt ad quod porro hic maxime mollitia quae culpa voluptatem nobis totam suscipit vero neque? Ipsam quasi saepe impedit recusandae molestias officiis reiciendis at voluptatem est, eaque maxime tempore? Amet ea quo doloremque minima rem vel delectus fugiat? Nostrum unde, asperiores nam repellat magni minus, tempore, quis magnam similique accusamus eaque. Eius provident suscipit iure, molestias, earum aut omnis perspiciatis quidem quas doloribus ullam perferendis quia. Nesciunt veniam odit voluptatem, sunt ipsa consectetur quia harum molestiae aperiam voluptas. Laboriosam odio, odit assumenda itaque enim veritatis, aliquid atque voluptate sequi asperiores dolor tenetur.</p>
        </div>
      </div>
      <Slider/>
      <Banner/>
    </div>

  );
};

export default Actor;
