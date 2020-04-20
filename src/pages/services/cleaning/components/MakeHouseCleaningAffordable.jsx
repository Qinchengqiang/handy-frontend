import GetStartedButton from "./GetStartedButton";
import React from "react";
import styled from "@emotion/styled";
import { StyledH2Left, StyledP, StyledPLeft } from "./CustomStyles";

const StyledLine = styled.div`
  width: 100%;
  border: 1px solid #d8d8d8;
`;

export default () => {
  return (
    <>
      <StyledP>
        <StyledLine />
      </StyledP>
      <StyledH2Left>Make House Cleaning Your Affordable Luxury</StyledH2Left>
      <StyledPLeft>
        Imagine a world without Handy. You’ve put in a 12 hour day at the
        office, your train is 30 minutes late, and by the time you finally walk
        into your apartment, there are dirty dishes stacked high in the sink,
        dirty clothes are strewn everywhere, your bed is unmade, the shower is
        starting to smell a bit like mildew, and the floors are covered with
        mud. A professional maid service probably sounds pretty good right about
        now, doesn't it? The last thing in the world you want to do is pull on
        your yellow rubber gloves and begin scrubbing the floors and vacuuming
        the carpets. With Handy, you don’t have to.
      </StyledPLeft>
      <StyledPLeft>
        There is no feeling quite like coming home from work and walking into a
        beautiful, fresh-smelling, clean home. Rather than clean the toilet,
        dust the shelves, and wipe down the countertops, you can instead unwind
        on the couch, curled up under a blanket, maybe pour yourself that glass
        of wine you’ve been thinking about, and start that new TV show
        everyone’s been talking about. A visit from a housekeeping service is
        one of the best gifts you can give yourself. Book a home cleaning with
        Handy today.
      </StyledPLeft>
      <StyledH2Left>
        Fairly Priced and Convenient Cleaning Services
      </StyledH2Left>
      <StyledPLeft>
        Price is important. Nobody likes it when they think they’re paying one
        price for a home cleaning service provider, and then they are informed
        that the price is actually going to be much higher. With Handy, we let
        you know up front what you’re going to pay. And with incredibly
        affordable hourly rates given at a discount to loyal customers who sign
        up for weekly, bi-weekly or monthly house cleaning services, we’re
        confident you’ll be satisfied.
      </StyledPLeft>
      <StyledPLeft>
        Admit it, we’ve all been there. Your home cleaning or maid service is
        coming the next morning and you realize at 9 PM that you don’t have any
        cash to pay them. So you reluctantly put on your shoes, find your
        jacket, and drive to the nearest bank to take money out of the ATM.
        Handy is entirely cashless -- pay your cleaner in the app with a credit
        card, simple as that. We’ll even save it for next time. And if you’re so
        thrilled with how beautiful and clean your apartment looks and you want
        to tip your house cleaning pro something extra, you can do that with
        your credit card in the app as well.
      </StyledPLeft>
      <StyledH2Left>
        Ensuring Your House Cleaner Does the Perfect Job
      </StyledH2Left>
      <StyledPLeft>
        We know that when you book a maid service, housekeeping service, or
        house cleaning service through Handy, you are allowing a stranger to
        enter your home. When you book a house cleaner through the Handy
        platform, you can rest assured that they’ve been vetted before they
        arrive at your door. You can give your Handy professional additional
        instructions when filling out your cleaning preferences online. If you
        have particular allergies to detergents, for instance, or a special way
        of cleaning that you prefer, you can easily let your house cleaner know
        ahead of time. You can even prioritize the various home cleaning tasks
        that your Handy professional will tackle in the order that you prefer,
        so you can make sure your biggest concerns will get extra love and
        attention.
      </StyledPLeft>
        <GetStartedButton label={"Get Started"}/>
    </>
  );
};
