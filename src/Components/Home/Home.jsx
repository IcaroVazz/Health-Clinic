import React, { useEffect } from 'react';
import '../Styles/Home.css';
import { faBars, faXmark, faCookieBite, faHeart, faStar, faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ScrollReveal from 'scrollreveal';
import '../Styles/Menu.css';
import '../Styles/Midia_social.css';
import '../Styles/depoimentos.css';
import '../Styles/Navegacao.css';
import '../Styles/Perfil.css';
import '../Styles/rodape.css';
import '../Styles/styles.css';
import Medicaimg from '../../Assets/MédicaInicio.jpg';
import Clinicaimg from '../../Assets/ClinicaHome.jpg'
import { width } from '@fortawesome/free-brands-svg-icons/fa11ty';

const Home = () => {

    useEffect(() => {
        const mobileBtn = document.getElementById('mobile_btn');
        const mobileMenu = document.getElementById('mobile_menu');
        const sections = document.querySelectorAll('section');
        const navItems = document.querySelectorAll('.nav-item');
        const header = document.querySelector('header');

        const handleMobileBtnClick = () => {
            if (mobileMenu) {
                mobileMenu.classList.toggle('active');
            }
            if (mobileBtn) {
                const icon = mobileBtn.querySelector('i');
                if (icon) {
                    icon.classList.toggle('fa-x');
                }
            }
        };

        const handleScroll = () => {
            const scrollPosition = window.scrollY - (header ? header.offsetHeight : 0);

            if (header) {
                if (scrollPosition <= 0) {
                    header.style.boxShadow = 'none';
                } else {
                    header.style.boxShadow = '5px 1px 5px rgba(0, 0, 0, 0.1)';
                }
            }

            let activeSectionIndex = 0;
            sections.forEach((section, i) => {
                const sectionTop = section.offsetTop - 280;
                const sectionBottom = sectionTop + section.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    activeSectionIndex = i;
                }
            });

            navItems.forEach(item => item.classList.remove('active'));
            if (navItems[activeSectionIndex]) {
                navItems[activeSectionIndex].classList.add('active');
            }
        };

        if (mobileBtn) {
            mobileBtn.addEventListener('click', handleMobileBtnClick);
        }
        window.addEventListener('scroll', handleScroll);

        if (window.ScrollReveal) {
            ScrollReveal().reveal('#cta', { origin: 'left', duration: 2000, distance: '20%' });
            ScrollReveal().reveal('#banner', { origin: 'right', duration: 2000, distance: '20%' });
            ScrollReveal().reveal('#perfil_text', { origin: 'left', duration: 2000, distance: '20%' });
            ScrollReveal().reveal('#perfil_image', { origin: 'right', duration: 2000, distance: '20%' });
            ScrollReveal().reveal('.dish', { origin: 'left', duration: 2000, distance: '20%' });
            ScrollReveal().reveal('#testimonials_chef', { origin: 'left', duration: 1000, distance: '20%' });
            ScrollReveal().reveal('.feedback', { origin: 'left', duration: 1000, distance: '20%' });
            ScrollReveal().reveal('.social-media-content', { origin: 'left', duration: 2000, distance: '20%' });
        }

        return () => {
            if (mobileBtn) {
                mobileBtn.removeEventListener('click', handleMobileBtnClick);
            }
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const Dish = ({ image, title, description, price }) => (
        <div className="dish">
            <div className="dish-heart">
                <FontAwesomeIcon icon={faHeart} />
            </div>
            <img src={image} className="dish-image" alt={`Imagem de ${title}`} />
            <h3 className="dish-title">
                {title}
            </h3>
            <span className="dish-description">
                {description}
            </span>
            <div className="dish-rate">
                {[...Array(5)].map((_, i) => <FontAwesomeIcon key={i} icon={faStar} />)}
                <span>(100+)</span>
            </div>
            <div className="dish-price">
                <h4>{price}</h4>
                <button className="btn-default">
                    <FontAwesomeIcon icon={faBasketShopping} />
                </button>
            </div>
        </div>
    );

    return (
        <>
            <header>
                <div id="header_container">
                    <nav id="navbar">
                        <div id="div_logo">
                            <i class="fa fa-medkit" aria-hidden="true" id="nav_logo"></i>
                            <p>Clinic<br />Health</p>
                        </div>
                        <ul id="nav_list">
                            <li className="nav-item active">
                                <a href="#home">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a href="#perfil">Sobre</a>
                            </li>
                            <li className="nav-item">
                                <a href="#menu">Cardápio</a>
                            </li>
                            <li className="nav-item">
                                <a href="#testimonials">Avaliações</a>
                            </li>
                        </ul>
                        <button id="mobile_btn">
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                        <a href="" className="btn-default link" target="_blank">
                            Agende
                        </a>
                    </nav>
                    <div id="mobile_menu">
                        <ul id="mobile_nav_list">
                            <li className="nav-item">
                                <a href="#home">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a href="#perfil">Sobre</a>
                            </li>
                            <li className="nav-item">
                                <a href="#menu">Cardápio</a>
                            </li>
                            <li className="nav-item">
                                <a href="#testimonials">Avaliações</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            <div className="container">
                <main id="content">
                    <section id="home">
                        <div id="shapes">
                            <div className="shape"></div>
                            <div className="shape2"></div>
                            <div className="shape3"></div>
                        </div>
                        <div id="cta">
                            <h1 className="title">
                                Cuide da sua <span>Saúde</span>
                            </h1>
                            <p className="description">
                                Há mais de uma década, transformando à Saúde da sua família.
                            </p>
                            <div id="cta_buttons">
                                <a href="" className="btn-default" target="_blank">Agendar Consulta</a>
                            </div>
                            <div className="social-midia-buttons">
                                <a href="https://wa.me/5571992440721" target="_blank">
                                    <FontAwesomeIcon icon={faWhatsapp} />
                                </a>
                                <a href="https://www.instagram.com/icarvz_" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </div>
                        </div>
                        <div id="banner">
                            <img src={Clinicaimg} alt="Clínica Qualquer" className={{
                                borderRadius: '90px'
                            }} />
                        </div>
                    </section>
                    <section id="perfil" style={{
                        marginBottom: "90px",
                        marginRight: "120px"
                    }}>
                        <div id="perfil_text">
                            <h2 className="section-title">Nossa História</h2>
                            <p className="description">
                                Na Clínica Bem-Estar, seu cuidado é nossa prioridade. Há mais de uma década, nossa equipe transforma o atendimento médico em uma experiência acolhedora e confiável. Utilizamos tecnologia de ponta e contamos com profissionais dedicados, garantindo diagnósticos precisos e um serviço de excelência.
                            </p>
                            <p className="description">
                                Fundada com a missão de oferecer uma saúde de alta qualidade à comunidade, nossa clínica é um espaço onde a empatia e o bem-estar se encontram. Estamos comprometidos com a sua saúde e com a construção de uma relação de confiança a cada visita.
                            </p>
                        </div>
                        <div id="perfil_image">
                            <img src={Medicaimg} alt="Perfil" />
                        </div>
                    </section>
                    <section id="menu">
                        <h2 className="section-title">Catálogo</h2>
                        <h3 className="section-subtitle">Clínicas mais Indicadas</h3>
                        <div id="dishes">
                            <Dish
                                image="https://maxmaq.com.br/wp-content/uploads/2020/02/imagem-montar-clinica-1024x539-1.png"
                                title="Clínica Bem-Estar"
                                description="Especializada em consultas de rotina e check-ups para toda a família."
                            />
                            <Dish
                                image="https://www.consultoriarr.com.br/wp-content/uploads/2019/10/img-abertura-de-clinicas-medicas-como-comecar.jpg"
                                title="Fisio Reabilitar"
                                description="Referência em fisioterapia, com foco em recuperação e tratamento de lesões."
                            />
                            <Dish
                                image="https://www.inspirali.com/app/uploads/2023/11/consultorio-medico.jpeg"
                                title="Laboratório Vita"
                                description="Oferece uma vasta gama de exames com resultados rápidos e precisos."
                            />
                            <Dish
                                image="https://empresasecooperativas.com.br/wp-content/uploads/2019/04/clinica-m%C3%A9dica-1024x535.jpg"
                                title="Dermato Avançada"
                                description="Clínica de dermatologia com os mais modernos tratamentos para pele e cabelo!"
                            />
                        </div>

                    </section>
                    <section id="testimonials">
                        <img src="https://meddoc.ie/wp-content/uploads/How-to-Open-a-Successful-Private-Clinic-of-Your-Own.jpg" alt="" id="testimonials_chef" style={{
                            borderRadius: "20px"
                        }}/>
                        <div id="testimonials_content">
                            <h2 className="section-title">Depoimentos</h2>
                            <h3 className="section-subtitle">O que os clientes falam sobre nós</h3>
                            <div id="feedbacks">
                                <div className="feedback">
                                    <img src="https://checkuplab.com.br/wp-content/uploads/2024/11/imagem-1-post-blog-cuidados-exames-preventivos-saude-do-homem-Check-Up-Lab.jpg" alt="" className="feedback-avatar" style={{
                                        borderRadius: '10px'
                                    }} />
                                    <div className="feedback-content">
                                        <p className="nome-star">
                                            Cauan
                                            <span>
                                                <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                                            </span>
                                        </p>
                                        <p>
                                            Atendimento perfeito, super educados!
                                        </p>
                                    </div>
                                </div>
                                <div className="feedback">
                                    <img src="https://img.freepik.com/fotos-kostenlos/friedlicher-alter-mann-im-ruhestand-in-einem-pflegeheim-der-im-bett-liegt_482257-26890.jpg?semt=ais_hybrid&w=740&q=80" alt="" className="feedback-avatar" style={{
                                        borderRadius: '10px'
                                    }}/>
                                    <div className="feedback-content">
                                        <p className="nome-star">
                                            Ricardo do Nada
                                            <span>
                                                <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                                            </span>
                                        </p>
                                        <p>
                                            Tudo maravilhoso desde as consultas ao atendimento dos funcionários.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <a href="" className="btn-default" target="_blank">Ver mais Avaliações</a>
                        </div>
                    </section>
                    <section id="social_media">
                        <h2 className="section-title">Redes Sociais</h2>
                        <div id="medias">
                            <div className="social-media-content">
                                <img src="https://img.freepik.com/vetores-gratis/instagram-logo_1199-122.jpg?semt=ais_incoming&w=740&q=80" alt="" className="social-media-image" style={{
                                    borderRadius: '10px'
                                }}/>
                                <h3>Visite nosso instagram</h3>
                                <h2 className="section-subtitle">esteja por dentro<br />das novidades</h2>
                                <a href="https://www.instagram.com/icarmvz_/" target="_blank"><button className="button-pedido">Visitar</button></a>
                            </div>
                            <div className="social-media-content">
                                <img src="https://s2-techtudo.glbimg.com/qsIuHxZ_g2spsqzzh3jNDCft2WE=/0x0:620x395/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/1/1/I6jD4IToSd28BHUj0nrA/2013-11-07-whatsapp-e-o-mensageiro-de-maior-sucesso-atualmente.png" alt="" className="social-media-image" style={{
                                    borderRadius: '10px'
                                }}/>
                                <h3>Entre em contato</h3>
                                <h2 className="section-subtitle">receba promoções<br />exclusivas</h2>
                                <a href="https://wa.me/557199940721" target="_blank"><button className="button-pedido">Agendar Consulta</button></a>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
            <footer>
                <img src="" alt="" id="footer_img" />
                <div id="footer_items">
                    <span id="copyright">
                        &copy; 2025 NATAD
                    </span>
                    <div className="social-midia-buttons">
                        <a href="https://wa.me/5571994440721?text=Olá%20desejo%20fazer%20uma%20consulta." target="_blank">
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </a>
                        <a href="https://www.instagram.com/icmvz" target="_blank">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Home;