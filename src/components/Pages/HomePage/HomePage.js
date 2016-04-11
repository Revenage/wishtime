/**
 * Created by Revenage on 3/11/2016.
 */
import React , { Component } from 'react';

export default class HomePage extends Component {

    render() {

        let bg = {
            backgroundImage: 'url(http://placekitten.com/1280/500)',
        };

        let img = [
            {backgroundImage: 'url(http://placekitten.com/901/600)'},
            {backgroundImage: 'url(http://placekitten.com/902/600)'},
            {backgroundImage: 'url(http://placekitten.com/903/600)'},
        ];


        return (
            <div className="home-page">
                <div className="bg-picture" style={bg}>
                    <h1 className="name">WishTime</h1>
                </div>
                <div className="page-wrapper">
                    <div className="section">
                        <div className="image-holder">
                            <div className="image" style={img[0]}></div>
                        </div>{/*
                            */}<div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad alias animi architecto aut consequuntur eaque excepturi facere, fugiat illo incidunt libero maxime minima modi mollitia nihil perspiciatis provident quia quo reiciendis repellendus sit totam ut voluptatem voluptatibus! Molestiae mollitia qui tempore? Accusantium alias aliquid aperiam aut commodi cupiditate, debitis deleniti dolorem doloremque dolores doloribus ducimus error eum excepturi explicabo facere magnam magni minus natus neque nobis odit porro praesentium quam quia quidem quisquam reiciendis sint, sunt tempore temporibus unde veniam voluptate. Fugit, impedit, necessitatibus? Asperiores commodi molestias nostrum omnis, qui rerum sint! Ad ex iste nostrum pariatur reiciendis! Aperiam dolorem ducimus enim, ipsam maiores nemo nesciunt tempora? Aliquid asperiores cum delectus earum eligendi ipsam molestiae nesciunt</div>
                    </div>
                    <div className="section">
                        <div className="text">Adipisci aliquam beatae cumque dolores eius et, excepturi, hic in, incidunt laudantium magni natus nesciunt nobis officiis optio porro quam quidem quo recusandae saepe sit soluta temporibus voluptates! Amet assumenda at, consequuntur dolore explicabo facilis perferendis quos temporibus. Asperiores autem consectetur dignissimos, dlis fugiat id impedit mollitia non nulla odio quam quas quasi, sunt tenetur voluptatem. A ab aperiam aspernatur at aut blanditiis consectetur consequatur cum cupiditate doloremque ea eius et excepturi expedita explicabo, fugiat fugit ipsa labore laboriosam libero magni minus molestias nemo nisi officiis placeat quas qui quia quibusdam quis ratione rem sint suscipit ut, velit vero voluptatem? At eaque, voluptas! Dolore dolorem, et ipsam iusto maiores praesentium! Aliquam animi aperiam aut cupiditate ducimus eos illum impedit ipsum itaque, iure libero nam nemo perferendis, quasi quo voluptates.</div>{/*
                            */}<div className="image-holder">
                            <div className="image" style={img[1]}></div>
                        </div>
                    </div>
                    <div className="section">
                        <div className="image-holder">
                            <div className="image" style={img[2]}></div>
                        </div>{/*
                        */}<div className="text">Consectetur dolor dolorem dolorum ea eaque et excepturi, laboriosam laudantium minima, modi nesciunt nihil numquam porro quia reiciendis sed sequi similique soluta veniam voluptas? Assumenda, culpa dolor dolore dolores eligendi ex id impedit, magni maxime molestiae nisi obcaecati odio perferendis praesentium quod ratione reiciendis soluta veniam vero, voluptatem? Aspernatur autem doloremque dolores error esse exercitationem expedita id in iusto, laudantium nisi nobis nostrum perferendis perspiciatis quam quia ratione recusandae saepe, similique aliquam amet autem corporis cum cumque ducimus eveniet expedita explicabo ipsam laudantium minus necessitatibus nihil numquam omnis perferendis, quam quasi qui quia quo recusandae sunt totam vel! Atque consequuntur dignissimos earum fugiat fugit incidunt nemo perspiciatis porro possimus, quo sed sit veritatis voluptate! Amet aperiam at autem consectetur cupiditate deserunt error esse explicabo facilis fuga harum inventore iusto magnam magni minus molestiae mollitia natus neque nobis numquam officiis optio quia quidem rem repellat, saepe suscipit tempore unde voluptatibus voluptatum.</div>
                    </div>
                </div>
            </div>
        );
    }
}
