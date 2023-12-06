import React from 'react';
import { Root, ErrorWrapper } from './styles';
import { IPictureQuestion } from './types';
import { Typography } from '../../../../../../../../../../components';
import { Controller } from 'react-hook-form';
import getData from '../../../../../../../../../../functions/getData';
import { PictureGroup } from './components';

const PictureQuestion: React.FC<IPictureQuestion> = ({ name, answer, title, control, onClick, errors }) => {
    const checkType = (value: string | string[]) => (typeof value == 'string' ? value : '');

    return (
        <Root>
            <Typography tag="h3" variant="smallTitle1bold1center" color="black">
                {title}
            </Typography>
            <ErrorWrapper>
                <Controller
                    name={name}
                    control={control}
                    rules={{ required: true }}
                    defaultValue={getData(name, answer[0].key)}
                    render={({ field: { onChange, name: fieldName } }) => (
                        <PictureGroup
                            onClick={onClick}
                            errors={!!errors[name]}
                            answer={answer}
                            onCheckChange={onChange}
                            defaultValue={checkType(getData(name, answer[0].key))}
                            fieldName={fieldName}
                        />
                    )}
                />
                {errors[name] && (
                    <Typography tag="p" variant="smallBody1regular1left" color="orange">
                        Выберите вариант
                    </Typography>
                )}
            </ErrorWrapper>
        </Root>
    );
};

export default PictureQuestion;
