import React from 'react';
import {
    Root,
    LogoManagersPhoneWrapper,
    Logo,
    ManagersPhoneWrapper,
    ContentWrapper,
    CoverImage,
    DescriptionWrapper,
} from './styles';
import { Typography, Link } from '../../../../components';
import logo from '../../../../assets/images/logo.png';
import coverImage from '../../../../assets/images/coverImage.jpg';
import arrowOnButton from '../../../../assets/images/arrowOnButton.svg';

const Home = () => {
    return (
        <Root>
            <ContentWrapper>
                <LogoManagersPhoneWrapper>
                    <Logo src={logo} />
                    <ManagersPhoneWrapper>
                        <Typography
                            tag="p"
                            weight="regular"
                            size="description"
                            textDecoration="none"
                            textAlign="left"
                            color="black"
                        >
                            Менеджер по персоналу Виктория:&nbsp;
                            <Link
                                color="orange"
                                variant="base"
                                href="tel:+79222144787"
                                display="nonFlex"
                                fontSize="description"
                                linkSize="base"
                            >
                                +7 (922) 214-47-87
                            </Link>
                        </Typography>
                    </ManagersPhoneWrapper>
                </LogoManagersPhoneWrapper>
                <Typography
                    tag="h1"
                    weight="bold"
                    size="mainTitle"
                    textDecoration="none"
                    textAlign="left"
                    color="orange"
                >
                    ОТКРЫТ КОНКУРС НА ВАКАНСИЮ ВОДИТЕЛЬ КАТЕГОРИИ СЕ (Е)
                </Typography>
                <DescriptionWrapper>
                    <Typography
                        tag="p"
                        weight="bold"
                        size="subTitle"
                        textDecoration="none"
                        textAlign="left"
                        color="black"
                    >
                        Екатеринбург и Свердловская обл.
                    </Typography>
                    <Typography
                        tag="p"
                        weight="regular"
                        size="description"
                        textDecoration="none"
                        textAlign="left"
                        color="black"
                    >
                        Оф. белая ЗП до 260 000 ₽ + фиксированный график и больничные.{' '}
                        <Typography
                            tag="strong"
                            weight="bold"
                            size="description"
                            textDecoration="none"
                            textAlign="left"
                            color="black"
                        >
                            Обязателен опыт от 1 года
                        </Typography>
                    </Typography>
                </DescriptionWrapper>
                <Link
                    color="white"
                    variant="baseButton"
                    href="#"
                    display="centeringButtonContent"
                    src={arrowOnButton}
                    fontSize="button"
                    linkSize="button"
                >
                    Перейти к анкете кандидата
                </Link>
            </ContentWrapper>
            <CoverImage src={coverImage} alt="Грузовик Savalt" />
        </Root>
    );
};
export default Home;
