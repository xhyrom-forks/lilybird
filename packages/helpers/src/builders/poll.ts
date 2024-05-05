import type { Poll, PollLayoutType } from "lilybird";

export class PollBuilder {
    readonly #poll: Poll.CreateStructure = <never>{};

    public constructor(type: PollLayoutType) {
        this.#poll.layout_type = type;
    }

    public setQuestion(question: Poll.MediaStructure): this {
        this.#poll.question = question;
        return this;
    }

    public setAnswers(...answers: Array<Poll.AnswerStructure>): this {
        this.#poll.answers = answers;
        return this;
    }

    public addAnswer(answer: Poll.AnswerStructure): this {
        if (!Array.isArray(this.#poll.answers)) this.#poll.answers = [];

        this.#poll.answers.push(answer);
        return this;
    }

    public setDuration(duration: number): this {
        this.#poll.duration = duration;
        return this;
    }

    public setAllowMultiselect(allowMultiselect: boolean): this {
        this.#poll.allow_multiselect = allowMultiselect;
        return this;
    }

    public toJSON(): Poll.CreateStructure {
        return this.#poll;
    }
}

export class PollAnswerBuilder {
    readonly #answer: Poll.AnswerStructure = <never>{};

    public setId(id: number): this {
        this.#answer.answer_id = id;
        return this;
    }

    public setMedia(media: Poll.MediaStructure): this {
        this.#answer.poll_media = media;
        return this;
    }

    public toJSON(): Poll.AnswerStructure {
        return this.#answer;
    }
}
